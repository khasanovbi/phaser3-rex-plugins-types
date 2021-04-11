declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/circlemaskimage/Creator' {
    import * as Phaser from 'phaser';

    import CircleMaskImage, {
        CircleMaskImageConfig,
    } from 'phaser3-rex-plugins/plugins/gameobjects/canvas/circlemaskimage/CircleMaskImage';

    type ConfigType = Phaser.Types.GameObjects.GameObjectConfig & {key?: any; frame?: any} & CircleMaskImageConfig;
    export default function Creator(config?: ConfigType, addToScene?: boolean): CircleMaskImage;
}
