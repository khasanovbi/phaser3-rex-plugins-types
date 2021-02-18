declare module 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborChess' {
    export type GetNeighborChessType = (
        chess: any,
        directions: number | string | number[],
        neighborTileZ: any,
        out?: any[],
    ) => any[] | null;
    const GetNeighborChess: GetNeighborChessType;
    export default GetNeighborChess;
}
