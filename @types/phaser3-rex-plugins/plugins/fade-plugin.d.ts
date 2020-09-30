declare module 'phaser3-rex-plugins/plugins/fade-plugin' {
    import * as Phaser from 'phaser';
    import {FadeConfig} from 'phaser3-rex-plugins/plugins/behaviors/fade/Fade';

    export default class FadePlugin extends Phaser.Plugins.BasePlugin {
        constructor(pluginManager: Phaser.Plugins.PluginManager);

        add(gameObject: Phaser.GameObjects.GameObject, config: FadeConfig): void;
    }
}
