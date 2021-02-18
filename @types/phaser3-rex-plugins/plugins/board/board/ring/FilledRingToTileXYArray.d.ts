declare module 'phaser3-rex-plugins/plugins/board/board/ring/FilledRingToTileXYArray' {
    export type FilledRingToTileXYArrayType = (
        centerTileXY: any,
        radius: number,
        nearToFar?: boolean | any[],
        out?: any[],
    ) => any[];
    const FilledRingToTileXYArray: FilledRingToTileXYArrayType;
    export default FilledRingToTileXYArray;
}
