declare module 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/SetMainboard' {
    export type SetMainBoardType<T = any> = (mainBoard: any, tileX: any, tileY: any) => T;
    const SetMainBoard: SetMainBoardType;
    export default SetMainBoard;
}
