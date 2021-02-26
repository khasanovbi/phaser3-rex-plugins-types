declare module 'phaser3-rex-plugins/plugins/board/miniboard/chess/AddChess' {
    export type AddChessType<T = any> = (gameObject: any, tileX: any, tileY: any, tileZ: any) => T;
    const AddChess: AddChessType;
    export default AddChess;
}
