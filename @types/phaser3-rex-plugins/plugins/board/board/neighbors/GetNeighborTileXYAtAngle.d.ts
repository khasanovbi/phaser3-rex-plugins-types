declare module 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileXYAtAngle' {
    import {GetTileXYAtDirectionType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetTileXYAtDirection';
    export type GetNeighborTileXYAtAngleType = (
        srcTileXY: any,
        angle: number,
        out?: any[],
    ) => ReturnType<GetTileXYAtDirectionType>;
    const GetNeighborTileXYAtAngle: GetNeighborTileXYAtAngleType;
    export default GetNeighborTileXYAtAngle;
}
