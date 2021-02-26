declare module 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/AlignToMainBoard' {
    export type AlignToMainBoardType<T = any> = (mainBoard: any, tileX: any, tileY: any) => T;
    const AlignToMainBoard: AlignToMainBoardType;
    export default AlignToMainBoard;
}
