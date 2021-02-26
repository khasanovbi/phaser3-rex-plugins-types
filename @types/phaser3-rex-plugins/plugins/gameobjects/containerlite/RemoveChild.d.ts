declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/RemoveChild' {
    interface RemoveChildType {
        remove(gameObject: any, destroyChild: any): this;
        clear(destroyChild: any): this;
    }

    const RemoveChild: RemoveChildType;
    export default RemoveChild;
}
