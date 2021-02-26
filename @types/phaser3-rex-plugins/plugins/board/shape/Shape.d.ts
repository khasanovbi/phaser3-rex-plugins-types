declare module 'phaser3-rex-plugins/plugins/board/shape/Shape' {
    import * as Phaser from 'phaser';
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';

    export default class Shape extends Phaser.GameObjects.Polygon {
        constructor(
            board: Board,
            tileX?: number,
            tileY?: number,
            tileZ?: number,
            fillColor?: any,
            fillAlpha?: number,
            addToBoard?: boolean,
        );
    }
}
