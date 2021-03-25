declare module 'phaser3-rex-plugins/templates/ui/ObjectFactory' {
    export default class ObjectFactory {
        scene: Phaser.Scene;
        displayList: Phaser.GameObjects.DisplayList;
        updateList: Phaser.GameObjects.UpdateList;

        constructor(scene: Phaser.Scene);

        destroy(): void;

        static register(type: string, callback: Function): void;
    }
}
