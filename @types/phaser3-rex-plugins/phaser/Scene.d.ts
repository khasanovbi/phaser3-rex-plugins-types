import BoardPlugin from 'phaser3-rex-plugins/plugins/board-plugin';

declare global {
    namespace Phaser {
        interface Scene {
            rexBoard: BoardPlugin;
        }
    }
}
