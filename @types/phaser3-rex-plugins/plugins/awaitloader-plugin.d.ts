declare module 'phaser3-rex-plugins/plugins/awaitloader-plugin' {
    import * as Phaser from 'phaser';

    export default class AwaitLoaderPlugin extends Phaser.Plugins.BasePlugin {
        constructor(pluginManager: Phaser.Plugins.PluginManager);

        addToScene(scene: Phaser.Scene): void;
    }
}
