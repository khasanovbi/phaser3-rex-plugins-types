declare module 'phaser3-rex-plugins/plugins/board/hexagonmap/GetParallelogramMap' {
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';

    type PointArray = {x: number; y: number}[];

    export default function GetParallelogramMap(
        board: Board,
        type: 0 | 1 | 2,
        width: number,
        height: number,
        out?: PointArray,
    ): PointArray;
}
