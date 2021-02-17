declare module 'phaser3-rex-plugins/plugins/board/fieldofview/FieldOfView' {
    export default class FieldOfView {
        constructor(gameObject: any, config: any);
        gameObject: any;
        chessData: any;
        face: any;
        cone: any;

        resetFromJSON(o: any): this;
        boot(): void;
        shutdown(): this;
        debugGraphics: any;
        destroy(): this;
        faceAngle: number | undefined;
        setFace(direction: any): this;
        coneRad: number | undefined;
        setConeMode(mode: any): this;
        coneMode: any;
        setCone(value: any): this;
        setOccupiedTest(enable: any): this;
        occupiedTest: any;
        setBlockerTest(enable: any): this;
        blockerTest: any;
        setEdgeBlockerTest(enable: any): this;
        edgeBlockerTest: any;
        setCostFunction(callback: any, scope: any): this;
        costCallback: any;
        costCallbackScope: any;
        setPreTestFunction(callback: any, scope: any): this;
        preTestCallback: any;
        preTestCallbackScope: any;
        setDebugGraphics(graphics: any): this;
        setDebugLineColor(visibleLineColor: any, invisibleLineColor: any): this;
        debugVisibleLineColor: any;
        debugInvisibleLineColor: any;
        setDebugLog(enabled: any): this;
        debugLog: any;
        clearDebugGraphics(): this;
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
