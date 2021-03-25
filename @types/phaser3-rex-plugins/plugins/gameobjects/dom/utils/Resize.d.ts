declare module 'phaser3-rex-plugins/plugins/gameobjects/dom/utils/Resize' {
    export type ResizeType<T = any> = (width: number, height: number) => T;
    const Resize: ResizeType;
    export default Resize;
}
