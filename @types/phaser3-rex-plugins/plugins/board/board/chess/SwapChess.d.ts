declare module 'phaser3-rex-plugins/plugins/board/board/chess/SwapChess' {
    export type SwapChessType<T = any> = (gameObjectA: any, gameObjectB: any, align?: boolean) => T;
    const SwapChess: SwapChessType;
    export default SwapChess;
}
