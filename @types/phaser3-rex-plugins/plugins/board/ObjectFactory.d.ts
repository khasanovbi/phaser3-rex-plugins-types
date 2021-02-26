declare module 'phaser3-rex-plugins/plugins/board/ObjectFactory' {
    import * as Phaser from 'phaser';
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';
    import ChessData from 'phaser3-rex-plugins/plugins/board/chess/ChessData';

    export default class ObjectFactory {
        scene: Phaser.Scene;
        displayList: Phaser.GameObjects.DisplayList;
        updateList: Phaser.GameObjects.UpdateList;

        constructor(scene: Phaser.Scene);

        static register(type: string, callback: Function): void;

        // TODO: Move outside and use declaration merging.
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
    }
}
