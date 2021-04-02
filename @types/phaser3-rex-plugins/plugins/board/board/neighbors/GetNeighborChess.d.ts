declare module 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborChess' {
    export default function GetNeighborChess(
        chess: any,
        directions: number | string | number[] | null,
        neighborTileZ?: any,
        out?: any[],
    ): any[] | null;
}
