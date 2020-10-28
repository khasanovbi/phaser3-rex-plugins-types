declare module 'phaser3-rex-plugins/plugins/board/ObjectFactory' {
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';
    import Chess from 'phaser3-rex-plugins/plugins/board/chess/Chess';

    export default class ObjectFactory {
        static register(type: any, callback: any): void;
        constructor(scene: Phaser.Scene);

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
        ): Chess;
    }
}
