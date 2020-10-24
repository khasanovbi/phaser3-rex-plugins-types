declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ContainerLite' {
    export default  class ContainerLite extends Base {
        constructor(scene: any, x: any, y: any, width: any, height: any, children: any);
        type: string;
        isRexContainerLite: boolean;
        syncChildrenEnable: boolean;
        _active: any;
        _mask: any;
        _scrollFactorX: any;
        _scrollFactorY: any;
        resize(width: any, height: any): ContainerLite;
        set x(arg: any);
        get x(): any;
        _x: any;
        set y(arg: any);
        get y(): any;
        _y: any;
        set rotation(arg: any);
        get rotation(): any;
        set scaleX(arg: any);
        get scaleX(): any;
        set scaleY(arg: any);
        get scaleY(): any;
        set flipX(arg: any);
        get flipX(): any;
        set flipY(arg: any);
        get flipY(): any;
        set visible(arg: any);
        get visible(): any;
        set alpha(arg: any);
        get alpha(): any;
        set active(arg: any);
        get active(): any;
        set mask(arg: any);
        get mask(): any;
        set scrollFactorX(arg: any);
        get scrollFactorX(): any;
        set scrollFactorY(arg: any);
        get scrollFactorY(): any;
        get list(): any[];
        add(gameObjects: any): ContainerLite;
        remove(gameObjects: any, destroyChild: any): ContainerLite;
        clear(destroyChild: any): ContainerLite;
    }

    import Base from "phaser3-rex-plugins/plugins/gameobjects/containerlite/Base";
}