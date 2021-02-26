declare module 'phaser3-rex-plugins/plugins/board/miniboard/chess/RemoveChess' {
    export type RemoveChessType<T = any> = (gameObject: any, tileX: any, tileY: any, tileZ: any, destroy: any) => T;
    const RemoveChess: RemoveChessType;
    export default RemoveChess;
}
