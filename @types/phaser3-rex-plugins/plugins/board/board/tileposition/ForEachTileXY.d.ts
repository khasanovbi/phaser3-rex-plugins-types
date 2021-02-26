declare module 'phaser3-rex-plugins/plugins/board/board/tileposition/ForEachTileXY' {
    export type ForEachTileXYType<T = any> = (callback: Function, scope: any, order?: 0 | 1 | 2 | 3) => T;
    const ForEachTileXY: ForEachTileXYType;
    export default ForEachTileXY;
}
