import ContainerLite from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ContainerLite';

declare global {
    namespace Phaser.GameObjects {
        interface GameObjectFactory {
            rexContainerLite(x: number, y: number, width?: number, height?: number, children?: any): ContainerLite;
        }

        interface GameObjectCreator {
            rexContainerLite(
                config?: Phaser.Types.GameObjects.GameObjectConfig & {
                    width?: number;
                    height?: number;
                    children?: any;
                },
            ): ContainerLite;
        }
    }
}
