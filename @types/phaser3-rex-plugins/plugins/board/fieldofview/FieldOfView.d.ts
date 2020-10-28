declare module 'phaser3-rex-plugins/plugins/board/fieldofview/FieldOfView' {
    export default class FieldOfView {
        constructor(gameObject: any, config: any);
        gameObject: any;
        chessData: any;
        face: any;
        cone: any;

        resetFromJSON(o: any): FieldOfView;
        boot(): void;
        shutdown(): FieldOfView;
        debugGraphics: any;
        destroy(): FieldOfView;
        faceAngle: number | undefined;
        setFace(direction: any): FieldOfView;
        coneRad: number | undefined;
        setConeMode(mode: any): FieldOfView;
        coneMode: any;
        setCone(value: any): FieldOfView;
        setOccupiedTest(enable: any): FieldOfView;
        occupiedTest: any;
        setBlockerTest(enable: any): FieldOfView;
        blockerTest: any;
        setEdgeBlockerTest(enable: any): FieldOfView;
        edgeBlockerTest: any;
        setCostFunction(callback: any, scope: any): FieldOfView;
        costCallback: any;
        costCallbackScope: any;
        setPreTestFunction(callback: any, scope: any): FieldOfView;
        preTestCallback: any;
        preTestCallbackScope: any;
        setDebugGraphics(graphics: any): FieldOfView;
        setDebugLineColor(visibleLineColor: any, invisibleLineColor: any): FieldOfView;
        debugVisibleLineColor: any;
        debugInvisibleLineColor: any;
        setDebugLog(enabled: any): FieldOfView;
        debugLog: any;
        clearDebugGraphics(): FieldOfView;
        get BLOCKER(): any;
        get INFINITY(): any;
        get board(): any;

        preTest(tileXYArray: any, visiblePoints: any): any;
        getCost(curTileXY: any, tileXYArray: any): any;
        isInCone(targetTileXY: any): any;
        isPathVisible(tileXYArray: any, visiblePoints: any): boolean;
        isInLOS(chess: any, visiblePoints: any, originTileXY: any): any;
        LOS(chessArray: any, visiblePoints: any, originTileXY: any, out: any): any;
        findFOV(visiblePoints: any, originTileXY: any, out: any): any;
    }
}
