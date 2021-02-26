declare module 'phaser3-rex-plugins/plugins/board/board/chess/AddChess' {
    export type AddChessType<T = any> = (
        gameObject: any,
        tileX: number,
        tileY: number,
        tileZ?: number,
        align?: boolean,
    ) => T;
    const AddChess: AddChessType;
    export default AddChess;
}
