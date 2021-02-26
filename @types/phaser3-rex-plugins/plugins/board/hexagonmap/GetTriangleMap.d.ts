declare module 'phaser3-rex-plugins/plugins/board/hexagonmap/GetTriangleMap' {
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';

    type PointArray = {x: number; y: number}[];

    export default function GetTriangleMap(board: Board, type: 0 | 1, height: number, out?: PointArray): PointArray;
}
