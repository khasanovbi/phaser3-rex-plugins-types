declare module 'phaser3-rex-plugins/plugins/board/moveto/MoveCloser' {
    export type MoveCloserType<T = any> = (tileX: any, tileY?: any) => T;
    const MoveCloser: MoveCloserType;
    export default MoveCloser;
}
