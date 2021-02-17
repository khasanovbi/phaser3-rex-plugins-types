declare module 'phaser3-rex-plugins/plugins/board-plugin' {
    import * as Phaser from 'phaser';
    import {HexagonMapType} from 'phaser3-rex-plugins/plugins/board/hexagonmap';
    import ObjectFactory from 'phaser3-rex-plugins/plugins/board/ObjectFactory';

    export default class BoardPlugin extends Phaser.Plugins.ScenePlugin {
        add: ObjectFactory;
        hexagonMap: HexagonMapType;

        constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager);
    }
}
