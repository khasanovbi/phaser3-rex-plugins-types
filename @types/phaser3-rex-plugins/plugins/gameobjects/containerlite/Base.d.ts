declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Base' {
    export default class Base {
        constructor(scene: any, x: any, y: any, width: any, height: any);
        children: any[];
        destroy(fromScene: any): void;
        contains(gameObject: any): boolean;
        add(gameObjects: any): this;
        remove(gameObjects: any, destroyChild: any): this;
        clear(destroyChild: any): this;
    }
}
