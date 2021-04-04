declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/Creator' {
    import * as Phaser from 'phaser';

    import Canvas from 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/Canvas';

    type ConfigType = Phaser.Types.GameObjects.GameObjectConfig | {width?: any; height?: any; fill?: any};
    export default function Creator(config?: ConfigType, addToScene?: boolean): Canvas;
}
