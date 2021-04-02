declare module 'phaser3-rex-plugins/plugins/board/board/worldposition/GridAlign' {
    export type GridAlignType<T = any> = (gameObject?: any, tileX?: number, tileY?: number) => T;
    const GridAlign: GridAlignType;
    export default GridAlign;
}
