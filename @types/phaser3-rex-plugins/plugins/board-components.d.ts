declare module 'phaser3-rex-plugins/plugins/board-components' {
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';
    import HexagonGrid from 'phaser3-rex-plugins/plugins/board/grid/hexagon/Hexagon';
    import QuadGrid from 'phaser3-rex-plugins/plugins/board/grid/quad/Quad';
    import Shape from 'phaser3-rex-plugins/plugins/board/shape/Shape';
    import Match from 'phaser3-rex-plugins/plugins/board/match/Match';
    import MoveTo from 'phaser3-rex-plugins/plugins/board/moveto/MoveTo';
    import PathFinder from 'phaser3-rex-plugins/plugins/board/pathfinder/PathFinder';
    import FieldOfView from 'phaser3-rex-plugins/plugins/board/fieldofview/FieldOfView';
    import Monopoly from 'phaser3-rex-plugins/plugins/board/monopoly/Monopoly';
    import MiniBoard from 'phaser3-rex-plugins/plugins/board/miniboard/MiniBoard';
    import HexagonMap from 'phaser3-rex-plugins/plugins/board/hexagonmap';
    import CreateTileTexture from 'phaser3-rex-plugins/plugins/board/texture/CreateTileTexture';

    export {
        Board,
        HexagonGrid,
        QuadGrid,
        Shape,
        Match,
        MoveTo,
        PathFinder,
        FieldOfView,
        Monopoly,
        MiniBoard,
        HexagonMap,
        CreateTileTexture,
    };
}
