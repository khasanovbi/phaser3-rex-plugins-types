declare module 'phaser3-rex-plugins/plugins/board/pathfinder/astartsearch/AStarSearch' {
    export type AStarSearchType<T = any> = (startTileXYZ: any, endTileXY: any, movingPoints: any, mode: any) => T;
    const AStarSearch: AStarSearchType;
    export default AStarSearch;
}
