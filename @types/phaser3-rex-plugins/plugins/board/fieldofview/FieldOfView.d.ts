declare module 'phaser3-rex-plugins/plugins/board/fieldofview/FieldOfView' {
    import Methods from 'phaser3-rex-plugins/plugins/board/fieldofview/Methods';

    type MethodsType = typeof Methods;

    type ConeMode = 'direction' | 'angle' | 0 | 1;

    interface FieldOfViewDebugConfig {
        graphics?: any;
        visibleLineColor?: any;
        invisibleLineColor?: any;
        log?: boolean;
    }

    export interface FieldOfViewConfig {
        occupiedTest?: boolean;
        blockerTest?: boolean;
        edgeBlockerTest?: boolean;
        preTestCallback?: Function;
        preTestCallbackScope?: any;
        costCallback?: Function;
        costCallbackScope?: any;
        cost?: any;
        face?: number;
        coneMode?: ConeMode;
        cone?: any;
        debug?: FieldOfViewDebugConfig;
    }

    export default class FieldOfView implements MethodsType {
        gameObject: any;
        chessData: any;
        private _face: any;
        private _cone: any;
        debugGraphics: any;
        faceAngle: number | undefined;
        coneRad: number | undefined;
        coneMode: ConeMode;
        occupiedTest: any;
        blockerTest: any;
        edgeBlockerTest: any;
        costCallback: any;
        costCallbackScope: any;
        preTestCallback: any;
        preTestCallbackScope: any;
        debugVisibleLineColor: any;
        debugInvisibleLineColor: any;
        debugLog: any;

        constructor(gameObject: any, config: FieldOfViewConfig);

        resetFromJSON(o: FieldOfViewConfig): this;

        boot(): void;

        shutdown(): this;

        destroy(): this;

        get face(): any;
        set face(direction: any);

        setFace(direction: any): this;

        get cone(): number | undefined;
        set cone(value: number | undefined);

        setConeMode(mode: ConeMode): this;

        setCone(value: any): this;

        setOccupiedTest(enable?: boolean): this;

        setBlockerTest(enable: any): this;

        setEdgeBlockerTest(enable?: boolean): this;

        setCostFunction(callback: Function, scope?: any): this;

        setPreTestFunction(callback: Function, scope?: any): this;

        setDebugGraphics(graphics: any): this;

        setDebugLineColor(visibleLineColor: any, invisibleLineColor: any): this;

        setDebugLog(enabled?: boolean): this;

        clearDebugGraphics(): this;

        get BLOCKER(): any;

        get INFINITY(): any;

        get board(): any;

        LOS(chessArray: any, visiblePoints?: any, originTileXY?: any, out?: any[]): any;

        findFOV(visiblePoints?: any, originTileXY?: any, out?: any[]): any[];

        getCost(curTileXY: any, tileXYArray: any): any;

        isInCone(targetTileXY: any): boolean;

        isInLOS(chess: any, visiblePoints?: any, originTileXY?: any): boolean;

        isPathVisible(tileXYArray: any, visiblePoints: any): boolean;

        preTest(tileXYArray: any, visiblePoints: any): boolean | undefined;
    }
}
