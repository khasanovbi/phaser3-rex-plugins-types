declare module 'phaser3-rex-plugins/plugins/webfontloader-plugin' {
    import * as Phaser from 'phaser';

    export default class WebfontLoaderPlugin extends Phaser.Plugins.BasePlugin {
        constructor(pluginManager: Phaser.Plugins.PluginManager);

        addToScene(scene: Phaser.Scene): void;
    }
}
