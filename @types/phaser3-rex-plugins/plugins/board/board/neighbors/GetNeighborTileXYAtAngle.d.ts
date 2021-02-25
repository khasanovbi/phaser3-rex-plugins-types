declare module 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileXYAtAngle' {
    import GetTileXYAtDirection from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetTileXYAtDirection';

    export default function GetNeighborTileXYAtAngle(
        srcTileXY: any,
        angle: number,
        out?: any[],
    ): ReturnType<typeof GetTileXYAtDirection>;
}
