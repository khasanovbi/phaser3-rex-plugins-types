declare module 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileXY' {
    import GetTileXYAtDirection from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetTileXYAtDirection';

    export default function GetNeighborTileXY(
        srcTileXY: any,
        directions: number[] | string | number | null,
        out?: any[],
    ): ReturnType<typeof GetTileXYAtDirection>;
}
