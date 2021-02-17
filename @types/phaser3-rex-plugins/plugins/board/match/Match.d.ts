declare module 'phaser3-rex-plugins/plugins/board/match/Match' {
    export default class Match {
        constructor(config: any);
        symbols: any[];
        dirMask: {};
        resetFromJSON(o: any): this;
        boot(): void;
        shutdown(): this;
        board: any;
        destroy(): this;
        setBoard(board: any): this;
        setDirMask(dir: any, value: any): this;
        setDirectionMode(mode: any): this;
        clearSymbols(): this;
        setSymbol(tileX: any, tileY: any, symbol: any): this;
        getSymbol(tileX: any, tileY: any): any;
        forEach(callback: any, scope: any): this;
        refreshSymbols(callback: any, scope: any): this;
        setWildcard(symbol: any): this;
        wildcard: any;
        tileXYToKey(tileX: any, tileY: any): any;
        keyToTileXY(key: any, out: any): any;
        anyMatch(pattern: any): any;

        match(pattern: any, callback: any, scope: any, getFirst: any): any;
        matchAtDir(
            pattern: any,
            startTileX: any,
            startTileY: any,
            direction: any,
        ):
            | false
            | {
                  tileXY: never[];
                  direction: undefined;
                  pattern: undefined;
              };
        group(startTileX: any, startTileY: any, out: any): any;
    }
}
