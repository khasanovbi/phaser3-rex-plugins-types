declare module 'phaser3-rex-plugins/plugins/board/monopoly/Monopoly' {
    export default class Monopoly {
        constructor(gameObject: any, config: any);
        gameObject: any;
        chessData: any;
        resetFromJSON(o: any): Monopoly;
        preTileXY: any;
        boot(): void;
        shutdown(): Monopoly;
        destroy(): Monopoly;
        setFace(direction: any): Monopoly;
        face: any;
        setPathMode(mode: any): Monopoly;
        pathMode: any;
        setCostFunction(callback: any, scope: any): Monopoly;
        costCallback: any;
        costCallbackScope: any;
        setPathTileZ(value: any): Monopoly;
        pathTileZ: any;
        get BLOCKER(): any;
        get STOP(): number;
        get board(): any;

        getPath(movingPoints: any, out: any): any;
        getNextTile(curTileData: any, preTileData: any): any;
        getCost(curTileXY: any, preTileXY: any): any;
    }
}
