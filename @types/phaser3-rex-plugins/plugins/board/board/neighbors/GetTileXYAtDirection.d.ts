declare module 'phaser3-rex-plugins/plugins/board/board/neighbors/GetTileXYAtDirection' {
    export type GetTileXYAtDirectionType = (
        chess: any,
        directions: any[] | string | number,
        distance: number | {start: number; end: number; step: number} | number[],
        out?: any[],
    ) => any[] | null;
    const GetTileXYAtDirection: GetTileXYAtDirectionType;
    export default GetTileXYAtDirection;
}
