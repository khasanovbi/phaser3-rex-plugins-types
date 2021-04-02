declare module 'phaser3-rex-plugins/plugins/board-plugin' {
    import * as Phaser from 'phaser';
    import HexagonMap from 'phaser3-rex-plugins/plugins/board/hexagonmap';
    import ObjectFactory from 'phaser3-rex-plugins/plugins/board/ObjectFactory';
    import CreateTileTexture from 'phaser3-rex-plugins/plugins/board/texture/CreateTileTexture';

    export default class BoardPlugin extends Phaser.Plugins.ScenePlugin {
        add: ObjectFactory;
        hexagonMap: typeof HexagonMap;
        createTileTexture: typeof CreateTileTexture;

        constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager);
    }
}
