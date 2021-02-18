declare module 'phaser3-rex-plugins/plugins/board/board/chess/RemoveAllChess' {
    export type RemoveAllChessType<T = any> = (destroy?: boolean, fromBoardRemove?: boolean) => T;
    const RemoveAllChess: RemoveAllChessType;
    export default RemoveAllChess;
}
