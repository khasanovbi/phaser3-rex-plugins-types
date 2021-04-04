declare module 'phaser3-rex-plugins/plugins/scripttagloader-plugin' {
    import * as Phaser from 'phaser';

    export default class ScriptTagLoaderPlugin extends Phaser.Plugins.BasePlugin {
        addToScene(scene: Phaser.Scene): void;
    }
}
