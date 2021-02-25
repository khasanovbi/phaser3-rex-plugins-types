declare module 'phaser3-rex-plugins/plugins/board/board/LogicMethods' {
    import HasBlocker from 'phaser3-rex-plugins/plugins/board/board/blocker/HasBlocker';
    import HasEdgeBlocker from 'phaser3-rex-plugins/plugins/board/board/blocker/HasEdgeBlocker';
    import {SetBoardHeightType} from 'phaser3-rex-plugins/plugins/board/board/boarddata/SetBoardHeight';
    import {SetBoardWidthType} from 'phaser3-rex-plugins/plugins/board/board/boarddata/SetBoardWidth';
    import {AddChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/AddChess';
    import GetAllChess from 'phaser3-rex-plugins/plugins/board/board/chess/GetAllChess';
    import {RemoveAllChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/RemoveAllChess';
    import {RemoveChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/RemoveChess';
    import {SwapChessType} from 'phaser3-rex-plugins/plugins/board/board/chess/SwapChess';
    import UidToChess from 'phaser3-rex-plugins/plugins/board/board/chess/UidToChess';
    import GetEmptyTileXYArray from 'phaser3-rex-plugins/plugins/board/board/empty/GetEmptyTileXYArray';
    import GetRandomEmptyTileXY from 'phaser3-rex-plugins/plugins/board/board/empty/GetRandomEmptyTileXY';
    import GetGridPoints from 'phaser3-rex-plugins/plugins/board/board/gridpoints/GetGridPoints';
    import AreNeighbors from 'phaser3-rex-plugins/plugins/board/board/neighbors/AreNeighbors';
    import GetNeighborChess from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborChess';
    import GetNeighborChessDirection from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborChessDirection';
    import GetNeighborTileDirection from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileDirection';
    import GetNeighborTileXY from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileXY';
    import GetNeighborTileXYAtAngle from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileXYAtAngle';
    import GetTileXYAtDirection from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetTileXYAtDirection';
    import FilledRingToTileXYArray from 'phaser3-rex-plugins/plugins/board/board/ring/FilledRingToTileXYArray';
    import RingToTileXYArray from 'phaser3-rex-plugins/plugins/board/board/ring/RingToTileXYArray';
    import CircleToTileXYArray from 'phaser3-rex-plugins/plugins/board/board/shape/CircleToTileXYArray';
    import EllipseToTileXYArray from 'phaser3-rex-plugins/plugins/board/board/shape/EllipseToTileXYArray';
    import LineToTileXYArray from 'phaser3-rex-plugins/plugins/board/board/shape/LineToTileXYArray';
    import PolygonToTileXYArray from 'phaser3-rex-plugins/plugins/board/board/shape/PolygonToTileXYArray';
    import RectangleToTileXYArray from 'phaser3-rex-plugins/plugins/board/board/shape/RectangleToTileXYArray';
    import ShapeToTileXYArray from 'phaser3-rex-plugins/plugins/board/board/shape/ShapeToTileXYArray';
    import TriangleToTileXYArray from 'phaser3-rex-plugins/plugins/board/board/shape/TriangleToTileXYArray';
    import ChessToTileXYZ from 'phaser3-rex-plugins/plugins/board/board/tileposition/ChessToTileXYZ';
    import Contains from 'phaser3-rex-plugins/plugins/board/board/tileposition/Contains';
    import DirectionBetween from 'phaser3-rex-plugins/plugins/board/board/tileposition/DirectionBetween';
    import {ForEachTileXYType} from 'phaser3-rex-plugins/plugins/board/board/tileposition/ForEachTileXY';
    import GetDistance from 'phaser3-rex-plugins/plugins/board/board/tileposition/GetDistance';
    import GetOppositeDirection from 'phaser3-rex-plugins/plugins/board/board/tileposition/GetOppositeDirection';
    import GetWrapTileXY from 'phaser3-rex-plugins/plugins/board/board/tileposition/GetWrapTileXY';
    import IsDirectionInCone from 'phaser3-rex-plugins/plugins/board/board/tileposition/IsDirectionInCone';
    import TileXYArrayToChessArray from 'phaser3-rex-plugins/plugins/board/board/tileposition/TileXYArrayToChessArray';
    import TileXYToChessArray from 'phaser3-rex-plugins/plugins/board/board/tileposition/TileXYToChessArray';
    import TileXYZToChess from 'phaser3-rex-plugins/plugins/board/board/tileposition/TileXYZToChess';
    import TileZToChessArray from 'phaser3-rex-plugins/plugins/board/board/tileposition/TileZToChessArray';
    import Fit from 'phaser3-rex-plugins/plugins/board/board/transform/Fit';
    import Mirror from 'phaser3-rex-plugins/plugins/board/board/transform/Mirror';
    import Offset from 'phaser3-rex-plugins/plugins/board/board/transform/Offset';
    import Rotate from 'phaser3-rex-plugins/plugins/board/board/transform/Rotate';
    import AngleBetween from 'phaser3-rex-plugins/plugins/board/board/worldposition/AngleBetween';
    import AngleSnapToDirection from 'phaser3-rex-plugins/plugins/board/board/worldposition/AngleSnapToDirection';
    import AngleToward from 'phaser3-rex-plugins/plugins/board/board/worldposition/AngleToward';
    import {GridAlignType} from 'phaser3-rex-plugins/plugins/board/board/worldposition/GridAlign';
    import IsAngleInCone from 'phaser3-rex-plugins/plugins/board/board/worldposition/IsAngleInCone';
    import IsOverlappingPoint from 'phaser3-rex-plugins/plugins/board/board/worldposition/IsOverlappingPoint';
    import TileXYArrayToWorldXYArray from 'phaser3-rex-plugins/plugins/board/board/worldposition/TileXYArrayToWorldXYArray';
    import TileXYToWorldX from 'phaser3-rex-plugins/plugins/board/board/worldposition/TileXYToWorldX';
    import TileXYToWorldXY from 'phaser3-rex-plugins/plugins/board/board/worldposition/TileXYToWorldXY';
    import TileXYToWorldY from 'phaser3-rex-plugins/plugins/board/board/worldposition/TileXYToWorldY';
    import WorldXYSnapToGrid from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYSnapToGrid';
    import WorldXYToChess from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToChess';
    import WorldXYToChessArray from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToChessArray';
    import WorldXYToTileX from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToTileX';
    import WorldXYToTileXY from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToTileXY';
    import WorldXYToTileY from 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToTileY';
    import GetChessData from 'phaser3-rex-plugins/plugins/board/chess/GetChessData';
    import GetChessUID from 'phaser3-rex-plugins/plugins/board/chess/GetChessUID';
    import KeyToTileXYZ from 'phaser3-hex-plugins/plugins/board/utils/tilexyzkey/KeyToTileXYZ';
    import TileXYToKey from 'phaser3-hex-plugins/plugins/board/utils/tilexyzkey/TileXYToKey';
    import TileXYZToKey from 'phaser3-hex-plugins/plugins/board/utils/tilexyzkey/TileXYZToKey';

    interface LogicMethodsType {
        getChessData: typeof GetChessData;

        getChessUID: typeof GetChessUID;

        setBoardWidth: SetBoardWidthType<this>;

        setBoardHeight: SetBoardHeightType<this>;

        tileXYZToKey: typeof TileXYZToKey;

        TileXYToKey: typeof TileXYToKey;

        keyToTileXYZ: typeof KeyToTileXYZ;

        tileXYToWorldX: typeof TileXYToWorldX;

        tileXYToWorldY: typeof TileXYToWorldY;

        tileXYToWorldXY: typeof TileXYToWorldXY;

        tileXYArrayToWorldXYArray: typeof TileXYArrayToWorldXYArray;

        worldXYToTileX: typeof WorldXYToTileX;

        worldXYToTileY: typeof WorldXYToTileY;

        worldXYToTileXY: typeof WorldXYToTileXY;

        worldXYToChessArray: typeof WorldXYToChessArray;

        worldXYToChess: typeof WorldXYToChess;

        worldXYSnapToGrid: typeof WorldXYSnapToGrid;

        angleBetween: typeof AngleBetween;

        isAngleInCone: typeof IsAngleInCone;

        angleToward: typeof AngleToward;

        angleSnapToDirection: typeof AngleSnapToDirection;

        isOverlappingPoint: typeof IsOverlappingPoint;

        gridAlign: GridAlignType<this>;

        lineToTileXYArray: typeof LineToTileXYArray;

        circleToTileXYArray: typeof CircleToTileXYArray;

        ellipseToTileXYArray: typeof EllipseToTileXYArray;

        polygonToTileXYArray: typeof PolygonToTileXYArray;

        rectangleToTileXYArray: typeof RectangleToTileXYArray;

        triangleToTileXYArray: typeof TriangleToTileXYArray;

        shapeToTileXYArray: typeof ShapeToTileXYArray;

        uidToChess: typeof UidToChess;

        addChess: AddChessType<this>;

        removeChess: RemoveChessType<this>;

        removeAllChess: RemoveAllChessType<this>;

        swapChess: SwapChessType<this>;

        moveChess: AddChessType<this>;

        getAllChess: typeof GetAllChess;

        contains: typeof Contains;

        forEachTileXY: ForEachTileXYType<this>;

        getWrapTileXY: typeof GetWrapTileXY;

        tileXYZToChess: typeof TileXYZToChess;

        tileXYToChessArray: typeof TileXYToChessArray;

        tileZToChessArray: typeof TileZToChessArray;

        tileXYArrayToChessArray: typeof TileXYArrayToChessArray;

        chessToTileXYZ: typeof ChessToTileXYZ;

        offset: typeof Offset;

        mirror: typeof Mirror;

        rotate: typeof Rotate;

        getOppositeDirection: typeof GetOppositeDirection;

        getDistance: typeof GetDistance;

        directionBetween: typeof DirectionBetween;

        isDirectionInCone: typeof IsDirectionInCone;

        fit: typeof Fit;

        getEmptyTileXYArray: typeof GetEmptyTileXYArray;

        getRandomEmptyTileXY: typeof GetRandomEmptyTileXY;

        getTileXYAtDirection: typeof GetTileXYAtDirection;

        getNeighborTileXY: typeof GetNeighborTileXY;

        getNeighborTileXYAtAngle: typeof GetNeighborTileXYAtAngle;

        getNeighborChess: typeof GetNeighborChess;

        getNeighborTileDirection: typeof GetNeighborTileDirection;

        getNeighborChessDirection: typeof GetNeighborChessDirection;

        areNeighbors: typeof AreNeighbors;

        ringToTileXYArray: typeof RingToTileXYArray;

        filledRingToTileXYArray: typeof FilledRingToTileXYArray;

        hasBlocker: typeof HasBlocker;

        hasEdgeBlocker: typeof HasEdgeBlocker;

        getGridPoints: typeof GetGridPoints;
    }

    const LogicMethods: LogicMethodsType;

    export default LogicMethods;
}
