declare module 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/PutOnMainBoard' {
    export type PutOnMainBoardType<T = any> = (mainBoard: any, tileX: any, tileY: any, align: any) => T;
    const PutOnMainBoard: PutOnMainBoardType;
    export default PutOnMainBoard;
}
