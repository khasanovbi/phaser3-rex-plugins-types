declare module 'phaser3-rex-plugins/plugins/board/ObjectFactory' {
    import * as Phaser from 'phaser';
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';
    import ChessData from 'phaser3-rex-plugins/plugins/board/chess/ChessData';
    import QuadGrid, {QuadGridConfig} from 'phaser3-rex-plugins/plugins/board/grid/quad/Quad';
    import HexagonGrid, {HexagonGridConfig} from 'phaser3-rex-plugins/plugins/board/grid/hexagon/Hexagon';
    import MoveTo from 'phaser3-rex-plugins/plugins/board/moveto/MoveTo';
    import PathFinder, {PathFinderConfig} from 'phaser3-rex-plugins/plugins/board/pathfinder/PathFinder';
    import Monopoly, {MonopolyConfig} from 'phaser3-rex-plugins/plugins/board/monopoly/Monopoly';
    import FieldOfView, {FieldOfViewConfig} from 'phaser3-rex-plugins/plugins/board/fieldofview/FieldOfView';
    import Match, {MatchConfig} from 'phaser3-rex-plugins/plugins/board/match/Match';
    import HexagonMap from 'phaser3-rex-plugins/plugins/board/hexagonmap';
    import MiniBoard, {MiniBoardConfig} from 'phaser3-rex-plugins/plugins/board/miniboard/MiniBoard';

    export default class ObjectFactory {
        scene: Phaser.Scene;
        displayList: Phaser.GameObjects.DisplayList;
        updateList: Phaser.GameObjects.UpdateList;

        constructor(scene: Phaser.Scene);

        static register(type: string, callback: Function): void;

        board(boardSettings: {
            width?: number;
            height?: number;
            grid?: {
                gridType?: 'hexagonGrid' | 'quadGrid';
                x?: number;
                y?: number;
                cellWidth?: number;
                cellHeight?: number;
                staggeraxis?: 'x' | 'y';
                staggerindex?: 'odd' | 'even';
                type?: 'orthogonal' | 'isometric';
                size?: number;
            };
        }): Board;

        shape(
            board?: Board,
            tileX?: number,
            tileY?: number,
            tileZ?: number,
            fillColor?: any,
            fillAlpha?: number,
            addToBoard?: boolean,
        ): ChessData;

        quadGrid(config: QuadGridConfig): QuadGrid;

        hexagonGrid(config: HexagonGridConfig): HexagonGrid;

        // TODO: Make MoveTo interface from (MiniBoardMoveTo | MoveTo)
        moveTo(gameObject: any, config: any): MoveTo;

        pathFinder(config: PathFinderConfig): PathFinder;
        pathFinder(gameObject: any, config: PathFinderConfig): PathFinder;

        monopoly(gameObject: any, config: MonopolyConfig): Monopoly;

        fieldOfView(gameObject: any, config: FieldOfViewConfig): FieldOfView;

        match(config: MatchConfig): Match;

        hexagonMap: typeof HexagonMap;

        miniBoard(x: number, y: number, config: MiniBoardConfig): MiniBoard;

        // TODO: Add more objects
    }
}
