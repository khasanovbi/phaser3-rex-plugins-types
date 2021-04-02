declare module 'phaser3-rex-plugins/plugins/board/match/Match' {
    import Methods from 'phaser3-rex-plugins/plugins/board/match/Methods';

    type MethodsType = typeof Methods;

    export interface MatchConfig {
        board?: any;
        wildcard?: string | number;
        dirMask?: any;
    }

    export default class Match implements MethodsType {
        symbols: any[];
        dirMask: {};
        board: any;
        wildcard: string | number;

        constructor(config: MatchConfig);

        resetFromJSON(o: MatchConfig): this;

        boot(): void;

        shutdown(): this;

        destroy(): this;

        setBoard(board: any): this;

        setDirMask(dir: any, value: any): this;

        setDirectionMode(mode: any): this;

        clearSymbols(): this;

        setSymbol(tileX: any, tileY: any, symbol: any): this;

        getSymbol(tileX: any, tileY: any): any;

        forEach(callback: Function, scope?: any): this;

        refreshSymbols(callback: Function, scope?: any): this;

        setWildcard(symbol: any): this;

        tileXYToKey(tileX: any, tileY: any): any;

        keyToTileXY(key: any, out?: any): any;

        anyMatch(pattern: any): any;

        group(startTileX: any, startTileY: any, out?: any[]): any[];

        match(pattern: any, callback: Function, scope: any, getFirst?: boolean): any;

        matchAtDir(
            pattern: any,
            startTileX: any,
            startTileY: any,
            direction: any,
        ): false | {tileXY: any[]; direction: any; pattern: any};
    }
}
