declare module 'phaser3-rex-plugins/plugins/board/monopoly/Monopoly' {
    import Methods from 'phaser3-rex-plugins/plugins/board/monopoly/Methods';

    type MethodsType = typeof Methods;

    export interface MonopolyConfig {
        preTileXY?: any;
        costCallback?: Function;
        costCallbackScope?: any;
        cost?: number;
        face?: number;
        pathMode?: number;
        pathTileZ?: number;
    }

    export default class Monopoly implements MethodsType {
        gameObject: any;
        chessData: any;
        preTileXY: any;
        face: any;
        pathMode: any;
        costCallback: any;
        costCallbackScope: any;
        pathTileZ: any;

        constructor(gameObject: any, config: MonopolyConfig);

        resetFromJSON(o: MonopolyConfig): this;

        boot(): void;

        shutdown(): this;

        destroy(): this;

        setFace(direction: any): this;

        setPathMode(mode: any): this;

        setCostFunction(callback?: Function, scope?: any): this;

        setPathTileZ(value: any): this;

        get BLOCKER(): any;

        get STOP(): number;

        get board(): any;

        getCost(curTileXY: any, preTileXY: any): number;

        getNextTile(curTileData: any, preTileData: any): any;

        getPath(movingPoints: any, out?: any[]): any[];
    }
}
