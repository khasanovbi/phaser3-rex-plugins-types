declare module 'phaser3-rex-plugins/plugins/board/pathfinder/PathFinder' {
    import Methods from 'phaser3-rex-plugins/plugins/board/pathfinder/Methods';

    type MethodsType = typeof Methods;

    interface PathFinderConfig {
        costCallback?: Function;
        costCallbackScope?: any;
        cost?: number;
        occupiedTest?: boolean;
        blockerTest?: boolean;
        edgeBlockerTest?: boolean;
        pathMode?: any;
        cacheCost?: boolean;
        weight?: number;
        shuffleNeighbors?: boolean;
    }

    export default class PathFinder implements MethodsType {
        nodeManager: any;
        gameObject: any;
        chessData: any;
        costCallback: any;
        costCallbackScope: any;
        pathMode: any;
        cacheCost: any;
        occupiedTest: any;
        blockerTest: any;
        edgeBlockerTest: any;
        shuffleNeighbors: any;
        weight: any;

        constructor(gameObject: any, config: PathFinderConfig);

        resetFromJSON(o: PathFinderConfig): this;

        boot(): void;

        shutdown(): this;

        destroy(): this;

        setChess(gameObject: any): this;

        setCostFunction(callback: Function, scope: any): this;

        setPathMode(mode: any): this;

        setCacheCostMode(value?: any): this;

        setOccupiedTest(enable?: boolean): this;

        setBlockerTest(enable?: boolean): this;

        setEdgeBlockerTest(enable?: boolean): this;

        setWeight(value: any): this;

        setShuffleNeighborsMode(value?: boolean): this;

        get BLOCKER(): any;

        get INFINITY(): any;

        get board(): any;

        aStarSearch(startTileXYZ: any, endTileXY: any, movingPoints: any, mode: any): this;

        findArea(movingPoints: any, out?: any[]): any[];

        findPath(endTileXY: any, movingPoints: any, isClosest: boolean, out?: any[]): any[];

        getCost(curNode: any, preNode: any): any;

        getPath(endTileXY: any, out?: any[]): any[];

        tileXYToCost(tileX: any, tileY: any, pathCost: any): any;
    }
}
