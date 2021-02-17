declare module 'phaser3-rex-plugins/plugins/board/monopoly/Monopoly' {
    export default class Monopoly {
        constructor(gameObject: any, config: any);
        gameObject: any;
        chessData: any;
        resetFromJSON(o: any): this;
        preTileXY: any;
        boot(): void;
        shutdown(): this;
        destroy(): this;
        setFace(direction: any): this;
        face: any;
        setPathMode(mode: any): this;
        pathMode: any;
        setCostFunction(callback: any, scope: any): this;
        costCallback: any;
        costCallbackScope: any;
        setPathTileZ(value: any): this;
        pathTileZ: any;
        get BLOCKER(): any;
        get STOP(): number;
        get board(): any;

        getPath(movingPoints: any, out: any): any;
        getNextTile(curTileData: any, preTileData: any): any;
        getCost(curTileXY: any, preTileXY: any): any;
    }
}
