declare module 'phaser3-rex-plugins/plugins/board/board/neighbors/GetNeighborTileXY' {
    import {GetTileXYAtDirectionType} from 'phaser3-rex-plugins/plugins/board/board/neighbors/GetTileXYAtDirection';
    export type GetNeighborTileXYType = (
        srcTileXY: any,
        directions: any[] | string | number,
        out?: any[],
    ) => ReturnType<GetTileXYAtDirectionType>;
    const GetNeighborTileXY: GetNeighborTileXYType;
    export default GetNeighborTileXY;
}
