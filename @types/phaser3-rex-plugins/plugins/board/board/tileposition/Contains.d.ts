declare module 'phaser3-rex-plugins/plugins/board/board/tileposition/Contains' {
    export type ContainsType = (tileX: number, tileY: number, tileZ?: number) => boolean;
    const Contains: ContainsType;
    export default Contains;
}
