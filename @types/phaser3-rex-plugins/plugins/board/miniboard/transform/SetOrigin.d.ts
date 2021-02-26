declare module 'phaser3-rex-plugins/plugins/board/miniboard/transform/SetOrigin' {
    export type SetOriginType<T = any> = (originX?: any, originY?: any) => T;
    const SetOrigin: SetOriginType;
    export default SetOrigin;
}
