declare module 'phaser3-rex-plugins/plugins/board/board/chess/RemoveChess' {
    // TODO: type overload
    export type RemoveChessType<T = any> = (
        gameObject: any,
        tileX: number | null,
        tileY: number | null,
        tileZ: number | null,
        destroy?: boolean,
        fromBoardRemove?: boolean,
    ) => T;
    const RemoveChess: RemoveChessType;
    export default RemoveChess;
}
