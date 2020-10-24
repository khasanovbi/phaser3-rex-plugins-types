declare module 'phaser3-rex-plugins/plugins/board-plugin' {
    import ObjectFactory from 'phaser3-rex-plugins/plugins/board/ObjectFactory';

    export default class BoardPlugin extends Phaser.Plugins.ScenePlugin {
        add: ObjectFactory;

        hexagonMap: {
            hexagon: (board: any, radius: any, out: any) => any;
            triangle: (board: any, type: any, height: any, out: any) => any;
            parallelogram: (board: any, type: any, width: any, height: any, out: any) => any;
        };

        constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager);
    }
}
