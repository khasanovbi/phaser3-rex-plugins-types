declare module 'phaser3-rex-plugins/plugins/board/grid/hexagon/Hexagon' {
    import Hexagon, {HexagonConfig} from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/Hexagon';
    import {SaveOriginType} from 'phaser3-rex-plugins/plugins/board/grid/utils/SaveOrigin';
    import {RestoreOriginType} from 'phaser3-rex-plugins/plugins/board/grid/utils/RestoreOrigin';
    import GetTileXYAtDirection from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetTileXYAtDirection';
    import GetNeighborTileXY from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetNeighborTileXY';
    import GetNeighborTileDirection from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetNeighborTileDirection';
    import GetOppositeDirection from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetOppositeDirection';
    import Offset from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/Offset';
    import Mirror from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/Mirror';
    import Rotate from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/Rotate';
    import GetDistance from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetDistance';
    import DirectionBetween from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/DirectionBetween';
    import RingToTileXYArray from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/RingToTileXYArray';
    import GetGridPoints from 'phaser3-rex-plugins/plugins/board/grid/hexagon/GetGridPoints';
    import DirectionNormalize from 'phaser3-rex-plugins/plugins/board/grid/utils/DirectionNormalize';

    export type HexagonGridConfig = HexagonConfig;

    interface Methods {
        saveOrigin: SaveOriginType<this>;
        restoreOrigin: RestoreOriginType<this>;
        getTileXYAtDirection: typeof GetTileXYAtDirection;
        getNeighborTileXY: typeof GetNeighborTileXY;
        getNeighborTileDirection: typeof GetNeighborTileDirection;
        getOppositeDirection: typeof GetOppositeDirection;
        offset: typeof Offset;
        mirror: typeof Mirror;
        rotate: typeof Rotate;
        getDistance: typeof GetDistance;
        directionBetween: typeof DirectionBetween;
        directionNormalize: typeof DirectionNormalize;
        getGridPoints: typeof GetGridPoints;
        ringToTileXYArray: typeof RingToTileXYArray;
    }

    export default class HexagonGrid extends Hexagon implements Methods {
        sides: number;

        constructor(config: HexagonGridConfig);

        get allDirections(): number[];

        get halfDirections(): number[];

        directionBetween(tileA: any, tileB: any, round: boolean | undefined): any;

        directionNormalize(direction: any): number;

        getDistance(tileA: any, tileB: any, roughMode: any): any;

        getGridPoints(tileX: any, tileY: any, points: any): any;

        getNeighborTileDirection(srcTileXY: any, neighborTileXY: any): any;

        getNeighborTileXY(tileX: number, tileY: number, direction: number, out: any): any;

        getOppositeDirection(tileX: any, tileY: any, direction: number): number;

        getTileXYAtDirection(tileX: number, tileY: number, direction: number, distance: any, out: any): any;

        mirror(src: any, mode: any, out: any): any;

        offset(src: any, offsetX: any, offsetY: any, out: any): any;

        restoreOrigin(): this;

        ringToTileXYArray(centerTileXY: any, radius: number, out: any[] | undefined): any[];

        rotate(src: any, dir: any, out: any): any;

        saveOrigin(): this;
    }
}
