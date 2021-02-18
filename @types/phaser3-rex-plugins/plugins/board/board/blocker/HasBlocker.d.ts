declare module 'phaser3-rex-plugins/plugins/board/board/blocker/HasBlocker' {
    export type HasBlockerType = (tileX: number, tileY: number, tileZ?: number) => boolean;
    const HasBlocker: HasBlockerType;
    export default HasBlocker;
}
