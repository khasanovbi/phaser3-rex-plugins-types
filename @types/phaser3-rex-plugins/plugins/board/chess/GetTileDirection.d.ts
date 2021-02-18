declare module 'phaser3-rex-plugins/plugins/board/chess/GetTileDirection' {
    export type GetTileDirectionType = (tileX: number, tileY: number) => number;
    const GetTileDirection: GetTileDirectionType;
    export default GetTileDirection;
}
