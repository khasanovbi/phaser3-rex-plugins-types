declare module 'phaser3-rex-plugins/plugins/board/board/LogicMethods' {
    import {HasBlockerType} from 'phaser3-rex-plugins/plugins/board/board/blocker/HasBlocker';
    import {HasEdgeBlockerType} from 'phaser3-rex-plugins/plugins/board/board/blocker/HasEdgeBlocker';
    import {SetBoardHeightType} from 'phaser3-rex-plugins/plugins/board/board/boarddata/SetBoardHeight';
    import {SetBoardWidthType} from 'phaser3-rex-plugins/plugins/board/board/boarddata/SetBoardWidth';
    import {AddChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/AddChess';
    import {GetAllChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/GetAllChess';
    import {RemoveAllChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/RemoveAllChess';
    import {RemoveChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/RemoveChess';
    import {SwapChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/SwapChess';
    import {UidToChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/UidToChess';
    import {GetEmptyTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/empty/GetEmptyTileXYArray';
    import {GetRandomEmptyTileXYType} from 'phaser3-rex-plugins/plugins/board/board/empty/GetRandomEmptyTileXY';
    import {GetGridPointsType} from 'phaser3-rex-plugins/plugins/board/board/gridpoints/GetGridPoints';
    import {AreNeighborsType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/AreNeighbors';
    import {GetNeighborChessType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborChess';
    import {GetNeighborChessDirectionType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborChessDirection';
    import {GetNeighborTileDirectionType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileDirection';
    import {GetNeighborTileXYType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileXY';
    import {GetNeighborTileXYAtAngleType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileXYAtAngle';
    import {GetTileXYAtDirectionType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetTileXYAtDirection';
    import {FilledRingToTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/ring/FilledRingToTileXYArray';
    import {RingToTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/ring/RingToTileXYArray';
    import {CircleToTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/shape/CircleToTileXYArray';
    import {EllipseToTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/shape/EllipseToTileXYArray';
    import {LineToTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/shape/LineToTileXYArray';
    import {PolygonToTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/shape/PolygonToTileXYArray';
    import {RectangleToTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/shape/RectangleToTileXYArray';
    import {ShapeToTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/shape/ShapeToTileXYArray';
    import {TriangleToTileXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/shape/TriangleToTileXYArray';
    import {ChessToTileXYZType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/ChessToTileXYZ';
    import {ContainsType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/Contains';
    import {DirectionBetweenType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/DirectionBetween';
    import {ForEachTileXYType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/ForEachTileXY';
    import {GetDistanceType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/GetDistance';
    import {GetOppositeDirectionType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/GetOppositeDirection';
    import {GetWrapTileXYType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/GetWrapTileXY';
    import {IsDirectionInConeType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/IsDirectionInCone';
    import {TileXYArrayToChessArrayType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/TileXYArrayToChessArray';
    import {TileXYToChessArrayType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/TileXYToChessArray';
    import {TileXYZToChessType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/TileXYZToChess';
    import {TileZToChessArrayType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/TileZToChessArray';
    import {FitType} from 'phaser3-rex-plugins/plugins/board/board/transform/Fit';
    import {MirrorType} from 'phaser3-rex-plugins/plugins/board/board/transform/Mirror';
    import {OffsetType} from 'phaser3-rex-plugins/plugins/board/board/transform/Offset';
    import {RotateType} from 'phaser3-rex-plugins/plugins/board/board/transform/Rotate';
    import {AngleBetweenType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/AngleBetween';
    import {AngleSnapToDirectionType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/AngleSnapToDirection';
    import {AngleTowardType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/AngleToward';
    import {GridAlignType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/GridAlign';
    import {IsAngleInConeType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/IsAngleInCone';
    import {IsOverlappingPointType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/IsOverlappingPoint';
    import {TileXYArrayToWorldXYArrayType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/TileXYArrayToWorldXYArray';
    import {TileXYToWorldXType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/TileXYToWorldX';
    import {TileXYToWorldXYType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/TileXYToWorldXY';
    import {TileXYToWorldYType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/TileXYToWorldY';
    import {WorldXYSnapToGridType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYSnapToGrid';
    import {WorldXYToChessType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToChess';
    import {WorldXYToChessArrayType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToChessArray';
    import {WorldXYToTileXType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToTileX';
    import {WorldXYToTileXYType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToTileXY';
    import {WorldXYToTileYType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToTileY';
    import {GetChessDataType} from 'phaser3-rex-plugins/plugins/board/chess/GetChessData';
    import {GetChessUIDType} from 'phaser3-rex-plugins/plugins/board/chess/GetChessUID';
    import {KeyToTileXYZType} from 'phaser3-hex-plugins/plugins/board/utils/tilexyzkey/KeyToTileXYZ';
    import {TileXYToKeyType} from 'phaser3-hex-plugins/plugins/board/utils/tilexyzkey/TileXYToKey';
    import {TileXYZToKeyType} from 'phaser3-hex-plugins/plugins/board/utils/tilexyzkey/TileXYZToKey';

    export interface LogicMethodsType {
        getChessData: GetChessDataType;

        getChessUID: GetChessUIDType;

        setBoardWidth: SetBoardWidthType<this>;

        setBoardHeight: SetBoardHeightType<this>;

        tileXYZToKey: TileXYZToKeyType;

        TileXYToKey: TileXYToKeyType;

        keyToTileXYZ: KeyToTileXYZType;

        tileXYToWorldX: TileXYToWorldXType;

        tileXYToWorldY: TileXYToWorldYType;

        tileXYToWorldXY: TileXYToWorldXYType;

        tileXYArrayToWorldXYArray: TileXYArrayToWorldXYArrayType;

        worldXYToTileX: WorldXYToTileXType;

        worldXYToTileY: WorldXYToTileYType;

        worldXYToTileXY: WorldXYToTileXYType;

        worldXYToChessArray: WorldXYToChessArrayType;

        worldXYToChess: WorldXYToChessType;

        worldXYSnapToGrid: WorldXYSnapToGridType;

        angleBetween: AngleBetweenType;

        isAngleInCone: IsAngleInConeType;

        angleToward: AngleTowardType;

        angleSnapToDirection: AngleSnapToDirectionType;

        isOverlappingPoint: IsOverlappingPointType;

        gridAlign: GridAlignType<this>;

        lineToTileXYArray: LineToTileXYArrayType;

        circleToTileXYArray: CircleToTileXYArrayType;

        ellipseToTileXYArray: EllipseToTileXYArrayType;

        polygonToTileXYArray: PolygonToTileXYArrayType;

        rectangleToTileXYArray: RectangleToTileXYArrayType;

        triangleToTileXYArray: TriangleToTileXYArrayType;

        shapeToTileXYArray: ShapeToTileXYArrayType;

        uidToChess: UidToChessType;

        addChess: AddChessType<this>;

        removeChess: RemoveChessType<this>;

        removeAllChess: RemoveAllChessType<this>;

        swapChess: SwapChessType<this>;

        moveChess: AddChessType<this>;

        getAllChess: GetAllChessType;

        contains: ContainsType;

        forEachTileXY: ForEachTileXYType<this>;

        getWrapTileXY: GetWrapTileXYType;

        tileXYZToChess: TileXYZToChessType;

        tileXYToChessArray: TileXYToChessArrayType;

        tileZToChessArray: TileZToChessArrayType;

        tileXYArrayToChessArray: TileXYArrayToChessArrayType;

        chessToTileXYZ: ChessToTileXYZType;

        offset: OffsetType;

        mirror: MirrorType;

        rotate: RotateType;

        getOppositeDirection: GetOppositeDirectionType;

        getDistance: GetDistanceType;

        directionBetween: DirectionBetweenType;

        isDirectionInCone: IsDirectionInConeType;

        fit: FitType;

        getEmptyTileXYArray: GetEmptyTileXYArrayType;

        getRandomEmptyTileXY: GetRandomEmptyTileXYType;

        getTileXYAtDirection: GetTileXYAtDirectionType;

        getNeighborTileXY: GetNeighborTileXYType;

        getNeighborTileXYAtAngle: GetNeighborTileXYAtAngleType;

        getNeighborChess: GetNeighborChessType;

        getNeighborTileDirection: GetNeighborTileDirectionType;

        getNeighborChessDirection: GetNeighborChessDirectionType;

        areNeighbors: AreNeighborsType;

        ringToTileXYArray: RingToTileXYArrayType;

        filledRingToTileXYArray: FilledRingToTileXYArrayType;

        hasBlocker: HasBlockerType;

        hasEdgeBlocker: HasEdgeBlockerType;

        getGridPoints: GetGridPointsType;
    }

    const LogicMethods: LogicMethodsType;

    export default LogicMethods;
}
