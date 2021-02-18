declare module 'phaser3-rex-plugins/plugins/board/board/LogicBoard' {
    import * as Phaser from 'phaser';
    import EE from 'phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitter';
    import BoardData from 'phaser3-rex-plugins/plugins/board/board/boarddata/BoardData';
    import {LogicMethodsType} from 'phaser3-rex-plugins/plugins/board/board/LogicMethods';
    import {GetTileXYAtDirectionType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetTileXYAtDirection';
    import {SetInteractiveType} from 'phaser3-rex-plugins/plugins/board/board/input/SetInteractive';

    export interface BoardConfig {
        isBoard?: boolean;
        grid?: any;
        wrap?: boolean;
        infinity?: boolean;
        width?: number;
        height?: number;
    }

    interface SetInteractive {
        setInteractive: SetInteractiveType<this>;
    }

    export default class Board extends EE implements LogicMethodsType, SetInteractive {
        scene: Phaser.Scene;
        boardData: BoardData;
        isBoard: boolean;
        grid: any;
        wrapMode: boolean;
        infinityMode: boolean;

        constructor(scene: Phaser.Scene, config: BoardConfig);

        resetFromJSON(o: BoardConfig): this;

        boot(): void;

        setGrid(grid: any): this;

        setWrapMode(mode?: boolean): this;

        setInfinityMode(mode?: boolean): this;

        setBoardSize(width: number, height: number): this;

        exists(gameObject: any): boolean;

        get chessCount(): number;

        clear(destroy?: boolean): this;

        TileXYToKey(tileX: any, tileY: any, separator: any): string;

        addChess(gameObject: any, tileX: number, tileY: number, tileZ?: number, align?: boolean): this;

        angleBetween(tileA: any, tileB: any): number;

        angleSnapToDirection(tileXY: any, angle: number): number | undefined;

        angleToward(tileXY: any, direction: any): number;

        areNeighbors(chessA: any, chessB: any): boolean;

        chessToTileXYZ(chess: any): any;

        circleToTileXYArray(circle: any, out?: any[]): any[];

        contains(tileX: number, tileY: number, tileZ?: number): boolean;

        directionBetween(chessA: any, chessB: any, round?: boolean): number;

        ellipseToTileXYArray(ellipse: any, out?: any[]): any[];

        filledRingToTileXYArray(centerTileXY: any, radius: number, nearToFar?: boolean | any[], out?: any[]): any[];

        fit(tileXYArray: any[]): any[];

        forEachTileXY(callback: Function, scope: any, order?: 0 | 1 | 2 | 3): this;

        getAllChess(out?: any[]): any[];

        getChessData(gameObject: any): any;

        getChessUID(gameObject: any): any;

        getDistance(tileA: any, tileB: any, roughMode: any): number;

        getEmptyTileXYArray(tileZ?: number, out?: any[]): any[];

        getGridPoints(tileX: number, tileY: number, points: any): any;

        getNeighborChess(
            chess: any,
            directions: number | string | number[],
            neighborTileZ: any,
            out?: any[],
        ): any[] | null;

        getNeighborChessDirection(chess: any, neighborChess: any): number;

        getNeighborTileDirection(srcTileXY: any, neighborTileXY: any): number;

        getNeighborTileXY(
            srcTileXY: any,
            directions: any[] | string | number,
            out?: any[],
        ): ReturnType<GetTileXYAtDirectionType>;

        getNeighborTileXYAtAngle(srcTileXY: any, angle: number, out?: any[]): ReturnType<GetTileXYAtDirectionType>;

        getOppositeDirection(tileX: number, tileY: number, direction: number): boolean;

        getRandomEmptyTileXY(tileZ?: number, out?: any[] | true): any[] | null;

        getTileXYAtDirection(
            chess: any,
            directions: any[] | string | number,
            distance: number | {start: number; end: number; step: number} | number[],
            out?: any[],
        ): any[] | null;

        getWrapTileXY(tileX: number, tileY: number, out: any): any;

        gridAlign(gameObject: any, tileX: number, tileY: number): this;

        hasBlocker(tileX: number, tileY: number, tileZ?: number): boolean;

        hasEdgeBlocker(tileX: number, tileY: number, tileZ?: number, direction?: number): boolean;

        isAngleInCone(chessA: any, chessB: any, face: number, cone: number): boolean;

        isDirectionInCone(chessA: any, chessB: any, face: number, cone: number): boolean;

        isOverlappingPoint(worldX: number, worldY: number, tileZ?: number): boolean;

        keyToTileXYZ(key: any, out: any, separator: any): any;

        lineToTileXYArray(startX: any, startY: any, endX: any, endY: any, out?: any[]): any[];

        mirror(tileXY: any, mode: any, originTileXY: any, out: any): any;

        moveChess(gameObject: any, tileX: number, tileY: number, tileZ?: number, align?: boolean): this;

        offset(tileXY: any, OffsetTileX: number, OffsetTileY: number, out: any): any;

        polygonToTileXYArray(polygon: any, out?: any[]): any[];

        rectangleToTileXYArray(rectangle: any, out?: any[]): any[];

        removeAllChess(destroy?: boolean, fromBoardRemove?: boolean): this;

        removeChess(
            gameObject: any,
            tileX: number,
            tileY: number,
            tileZ: number,
            destroy?: boolean,
            fromBoardRemove?: boolean,
        ): this;

        ringToTileXYArray(centerTileXY: any, radius: number, out?: any[]): any[];

        rotate(tileXY: any, direction: any, originTileXY: number, out: any): any;

        setBoardHeight(height: number): this;

        setBoardWidth(width: number): this;

        shapeToTileXYArray(shape: any, containsCallback: Function, out?: any[]): any[];

        swapChess(gameObjectA: any, gameObjectB: any, align?: boolean): this;

        tileXYArrayToChessArray(tileXYArray: any[], tileZ: any, out?: any[]): any[];

        tileXYArrayToWorldXYArray(tileXYArray: any[], out?: any[]): any[];

        tileXYToChessArray(tileX: number, tileY: number, out?: any[]): any[];

        tileXYToWorldX(tileX: number, tileY: number): number;

        tileXYToWorldXY(tileX: number, tileY: number, out: any): any;

        tileXYToWorldY(tileX: number, tileY: number): number;

        tileXYZToChess(tileX: number, tileY: number, tileZ?: number): any;

        tileXYZToKey(tileX: any, tileY: any, tileZ: any, separator: any): string;

        tileZToChessArray(tileZ: number, out?: any[]): any[];

        triangleToTileXYArray(triangle: any, out?: any[]): any[];

        uidToChess(uid: any): any;

        worldXYSnapToGrid(worldX: number, worldY: number, out: any): any;

        worldXYToChess(worldX: number, worldY: number, tileZ?: number): any;

        worldXYToChessArray(worldX: number, worldY: number, out?: any[]): any[];

        worldXYToTileX(worldX: number, worldY: number): number;

        worldXYToTileXY(worldX: number, worldY: number, out: any): any;

        worldXYToTileY(worldX: number, worldY: number): number;

        // NOTE: setInteractive assigned at Board.js as side effect
        setInteractive(enable?: boolean): this;
    }
}
