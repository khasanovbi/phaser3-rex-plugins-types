declare module 'phaser3-rex-plugins/plugins/board/moveto/MoveToTile' {
    export type MoveToTileType<T = any> = (tileX: any, tileY?: any, direction?: any) => T;
    const MoveToTile: MoveToTileType;
    export default MoveToTile;
}
