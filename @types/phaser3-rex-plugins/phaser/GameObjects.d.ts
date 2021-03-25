import ContainerLiteCreator from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Creator';
import ContainerLiteFactory from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Factory';
import InputTextCreator from 'phaser3-rex-plugins/plugins/gameobjects/dom/inputtext/Creator';
import InputTextFactory from 'phaser3-rex-plugins/plugins/gameobjects/dom/inputtext/Factory';

declare global {
    namespace Phaser.GameObjects {
        interface GameObjectFactory {
            rexContainerLite: typeof ContainerLiteFactory;
            rexInputText: typeof InputTextFactory;
        }

        interface GameObjectCreator {
            rexContainerLite: typeof ContainerLiteCreator;
            rexInputText: typeof InputTextCreator;
        }
    }
}
