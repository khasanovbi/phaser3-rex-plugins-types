declare module 'phaser3-rex-plugins/plugins/board/pathfinder/PathFinder' {
    export default class PathFinder {
        constructor(gameObject: any, config: any);
        nodeManager: any;
        resetFromJSON(o: any): PathFinder;
        boot(): void;
        shutdown(): PathFinder;
        destroy(): PathFinder;
        setChess(gameObject: any): PathFinder;
        gameObject: any;
        chessData: any;
        setCostFunction(callback: any, scope: any): PathFinder;
        costCallback: any;
        costCallbackScope: any;
        setPathMode(mode: any): PathFinder;
        pathMode: any;
        setCacheCostMode(value: any): PathFinder;
        cacheCost: any;
        setOccupiedTest(enable: any): PathFinder;
        occupiedTest: any;
        setBlockerTest(enable: any): PathFinder;
        blockerTest: any;
        setEdgeBlockerTest(enable: any): PathFinder;
        edgeBlockerTest: any;
        setWeight(value: any): PathFinder;
        weight: any;
        setShuffleNeighborsMode(value: any): PathFinder;
        shuffleNeighbors: any;
        get BLOCKER(): any;
        get INFINITY(): any;
        get board(): any;

        tileXYToCost(tileX: any, tileY: any, pathCost: any): any;
        getPath(endTileXY: any, out: any): any;
        getCost(curNode: any, preNode: any): any;
        findPath(endTileXY: any, movingPoints: any, isClosest: any, out: any): any;
        findArea(movingPoints: any, out: any): any;
        aStarSearch(startTileXYZ: any, endTileXY: any, movingPoints: any, mode: any): any
    }
}