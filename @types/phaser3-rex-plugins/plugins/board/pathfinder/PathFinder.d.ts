declare module 'phaser3-rex-plugins/plugins/board/pathfinder/PathFinder' {
    export default class PathFinder {
        constructor(gameObject: any, config: any);
        nodeManager: any;
        resetFromJSON(o: any): this;
        boot(): void;
        shutdown(): this;
        destroy(): this;
        setChess(gameObject: any): this;
        gameObject: any;
        chessData: any;
        setCostFunction(callback: any, scope: any): this;
        costCallback: any;
        costCallbackScope: any;
        setPathMode(mode: any): this;
        pathMode: any;
        setCacheCostMode(value: any): this;
        cacheCost: any;
        setOccupiedTest(enable: any): this;
        occupiedTest: any;
        setBlockerTest(enable: any): this;
        blockerTest: any;
        setEdgeBlockerTest(enable: any): this;
        edgeBlockerTest: any;
        setWeight(value: any): this;
        weight: any;
        setShuffleNeighborsMode(value: any): this;
        shuffleNeighbors: any;
        get BLOCKER(): any;
        get INFINITY(): any;
        get board(): any;

        tileXYToCost(tileX: any, tileY: any, pathCost: any): any;
        getPath(endTileXY: any, out: any): any;
        getCost(curNode: any, preNode: any): any;
        findPath(endTileXY: any, movingPoints: any, isClosest: any, out: any): any;
        findArea(movingPoints: any, out: any): any;
        aStarSearch(startTileXYZ: any, endTileXY: any, movingPoints: any, mode: any): any;
    }
}
