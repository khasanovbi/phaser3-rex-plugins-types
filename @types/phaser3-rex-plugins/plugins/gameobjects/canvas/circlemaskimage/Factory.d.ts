declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/circlemaskimage/Factory' {
    import CircleMaskImage, {
        CircleMaskImageConfigOrMaskType,
    } from 'phaser3-rex-plugins/plugins/gameobjects/canvas/circlemaskimage/CircleMaskImage';

    function Factory(
        x: number,
        y: number,
        key: string,
        frame?: string | number,
        config?: CircleMaskImageConfigOrMaskType,
    ): CircleMaskImage;
    function Factory(x: number, y: number, key: string, config?: CircleMaskImageConfigOrMaskType): CircleMaskImage;

    export default Factory;
}
