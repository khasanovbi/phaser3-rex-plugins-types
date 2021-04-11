import CanvasCreator from 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/Creator';
import CanvasFactory from 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/Factory';
import CircleMaskImageCreator from 'phaser3-rex-plugins/plugins/gameobjects/canvas/circlemaskimage/Creator';
import CircleMaskImageFactory from 'phaser3-rex-plugins/plugins/gameobjects/canvas/circlemaskimage/Factory';
import ContainerLiteCreator from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Creator';
import ContainerLiteFactory from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Factory';
import InputTextCreator from 'phaser3-rex-plugins/plugins/gameobjects/dom/inputtext/Creator';
import InputTextFactory from 'phaser3-rex-plugins/plugins/gameobjects/dom/inputtext/Factory';

declare global {
    namespace Phaser.GameObjects {
        interface GameObjectFactory {
            rexContainerLite: typeof ContainerLiteFactory;
            rexInputText: typeof InputTextFactory;
            rexCanvas: typeof CanvasFactory;
            rexCircleMaskImage: typeof CircleMaskImageFactory;
        }

        interface GameObjectCreator {
            rexContainerLite: typeof ContainerLiteCreator;
            rexInputText: typeof InputTextCreator;
            rexCanvas: typeof CanvasCreator;
            rexCircleMaskImage: typeof CircleMaskImageCreator;
        }
    }
}
