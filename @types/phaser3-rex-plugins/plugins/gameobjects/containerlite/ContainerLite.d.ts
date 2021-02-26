declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ContainerLite' {
    import Base from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Base';
    import Methods from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Methods';

    type MethodsType = typeof Methods;

    export default class ContainerLite extends Base implements MethodsType {
        isRexContainerLite: boolean;
        syncChildrenEnable: boolean;
        mask: any;

        constructor(scene: any, x: any, y: any, width: any, height: any, children: any);

        resize(width: any, height: any): this;

        get list(): any[];

        add(gameObjects: any): this;

        remove(gameObjects: any, destroyChild: any): this;

        clear(destroyChild: any): this;

        addLocal(gameObject: any): this;

        addLocalMultiple(gameObjects: any): this;

        addMultiple(gameObjects: any): this;

        clearMask(destroyMask: boolean | undefined): this;

        count(property: any, value: any, startIndex: any, endIndex: any): number;

        getAll(property: any, value: any, startIndex: any, endIndex: any): any;

        getAllChildren(out: any[] | undefined): any[];

        getAllVisibleChildren(out: any[] | undefined): any[];

        getByName(name: string, recursive: boolean): any;

        getChildren(): any;

        getFirst(property: any, value: any, startIndex: any, endIndex: any): any;

        getLocalState(gameObject: any): any;

        getParent(gameObject: any): any;

        getRandom(startIndex: number, length: number): any;

        getTopmostParent(gameObject: any): any;

        incDepth(inc: number): this;

        localToWorld(point: any): any;

        moveTo(child: any, index: number): this;

        resetChildActiveState(gameObject: any): this;

        resetChildAlphaState(gameObject: any): this;

        resetChildPositionState(gameObject: any): this;

        resetChildRotationState(gameObject: any): this;

        resetChildScaleState(gameObject: any): this;

        resetChildState(gameObject: any): this;

        resetChildVisibleState(gameObject: any): this;

        resetChildrenState(gameObjects: any[]): this;

        setAll(property: any, value: any, startIndex: any, endIndex: any): this;

        setChildActive(gameObject: any, active: any): this;

        setChildAlpha(gameObject: any, alpha: any): this;

        setChildLocalActive(gameObject: any, active: any): this;

        setChildLocalAlpha(gameObject: any, alpha: any): this;

        setChildLocalPosition(gameObject: any, x: any, y: any): this;

        setChildLocalRotation(gameObject: any, rotation: any): this;

        setChildLocalScale(gameObject: any, scaleX: any, scaleY: any): this;

        setChildLocalVisible(child: any, visible: any): this;

        setChildMaskVisible(child: any, visible: any): this;

        setChildPosition(gameObject: any, x: any, y: any): this;

        setChildRotation(gameObject: any, rotation: any): this;

        setChildScale(gameObject: any, scaleX: any, scaleY: any): this;

        setChildVisible(child: any, visible: any): this;

        setMask(mask: any): this;

        setParent(gameObject: any, parent: any): this;

        swap(child1: any, child2: any): this;

        swapDepth(containerB: any): this;

        syncActive(): this;

        syncAlpha(): this;

        syncMask(): this;

        syncPosition(): this;

        syncProperties(): this;

        syncRotation(): this;

        syncScale(): this;

        syncScrollFactor(): this;

        syncVisible(): this;

        tween(tweenConfig: any): any;

        tweenChild(tweenConfig: any): any;

        updateChildActive(child: any): this;

        updateChildAlpha(child: any): this;

        updateChildMask(child: any): this;

        updateChildPosition(child: any): this;

        updateChildRotation(child: any): this;

        updateChildScale(child: any): this;

        updateChildScrollFactor(child: any): this;

        updateChildVisible(child: any): this;

        worldToLocal(point: any): any;
    }
}
