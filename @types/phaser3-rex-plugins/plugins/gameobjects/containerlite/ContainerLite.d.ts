declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ContainerLite' {
    export default class ContainerLite extends Base {
        constructor(scene: any, x: any, y: any, width: any, height: any, children: any);
        type: string;
        isRexContainerLite: boolean;
        syncChildrenEnable: boolean;
        resize(width: any, height: any): this;
        x: any;
        y: any;
        rotation: any;
        scaleX: any;
        scaleY: any;
        flipX: any;
        flipY: any;
        visible: any;
        alpha: any;
        active: any;
        mask: any;
        scrollFactorX: any;
        scrollFactorY: any;
        get list(): any[];
        add(gameObjects: any): this;
        remove(gameObjects: any, destroyChild: any): this;
        clear(destroyChild: any): this;
    }

    import Base from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Base';
}
