declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/RemoveChild' {
    interface RemoveChildType {
        remove(gameObject: any, destroyChild?: boolean): this;
        clear(destroyChild?: boolean): this;
    }

    const RemoveChild: RemoveChildType;
    export default RemoveChild;
}
