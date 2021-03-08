import ContainerLiteCreator from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Creator';
import ContainerLiteFactory from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Factory';

declare global {
    namespace Phaser.GameObjects {
        interface GameObjectFactory {
            rexContainerLite: typeof ContainerLiteFactory;
        }

        interface GameObjectCreator {
            rexContainerLite: typeof ContainerLiteCreator;
        }
    }
}
