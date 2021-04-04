declare module 'phaser3-rex-plugins/plugins/imageuriloader-plugin' {
    import * as Phaser from 'phaser';

    export default class ImageURILoaderPlugin extends Phaser.Plugins.BasePlugin {
        addToScene(scene: Phaser.Scene): void;
    }
}
