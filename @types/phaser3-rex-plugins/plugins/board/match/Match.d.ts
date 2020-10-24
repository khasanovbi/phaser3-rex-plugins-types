declare module 'phaser3-rex-plugins/plugins/board/match/Match' {
    export default class Match {
        constructor(config: any);
        symbols: any[];
        dirMask: {};
        resetFromJSON(o: any): Match;
        boot(): void;
        shutdown(): Match;
        board: any;
        destroy(): Match;
        setBoard(board: any): Match;
        setDirMask(dir: any, value: any): Match;
        setDirectionMode(mode: any): Match;
        clearSymbols(): Match;
        setSymbol(tileX: any, tileY: any, symbol: any): Match;
        getSymbol(tileX: any, tileY: any): any;
        forEach(callback: any, scope: any): Match;
        refreshSymbols(callback: any, scope: any): Match;
        setWildcard(symbol: any): Match;
        wildcard: any;
        tileXYToKey(tileX: any, tileY: any): any;
        keyToTileXY(key: any, out: any): any;
        anyMatch(pattern: any): any;

        match(pattern: any, callback: any, scope: any, getFirst: any): any;
        matchAtDir(pattern: any, startTileX: any, startTileY: any, direction: any): false | {
            tileXY: never[];
            direction: undefined;
            pattern: undefined;
        };
        group(startTileX: any, startTileY: any, out: any): any;
    }
}