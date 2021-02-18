declare module 'phaser3-rex-plugins/plugins/board/board/worldposition/WorldXYToChess' {
    export type WorldXYToChessType = (worldX: number, worldY: number, tileZ?: number) => any;
    const WorldXYToChess: WorldXYToChessType;
    export default WorldXYToChess;
}
