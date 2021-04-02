declare module 'phaser3-rex-plugins/plugins/board/texture/CreateTileTexture' {
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';
    export default function (
        board: Board,
        key: any,
        fillStyle: string | undefined,
        strokeStyle: string | undefined,
        lineWidth: number | undefined,
        lineJoin?: string,
    ): any;
}
