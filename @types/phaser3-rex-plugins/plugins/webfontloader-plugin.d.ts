declare module 'phaser3-rex-plugins/plugins/webfontloader-plugin' {
    import * as Phaser from 'phaser';

    export default class WebFontLoaderPlugin extends Phaser.Plugins.BasePlugin {
        constructor(pluginManager: Phaser.Plugins.PluginManager);

        addToScene(scene: Phaser.Scene): void;
    }
}
