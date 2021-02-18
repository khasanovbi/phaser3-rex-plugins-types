declare module 'phaser3-rex-plugins/plugins/board/board/blocker/HasEdgeBlocker' {
    export type HasEdgeBlockerType = (tileX: number, tileY: number, tileZ?: number, direction?: number) => boolean;
    const HasEdgeBlocker: HasEdgeBlockerType;
    export default HasEdgeBlocker;
}
