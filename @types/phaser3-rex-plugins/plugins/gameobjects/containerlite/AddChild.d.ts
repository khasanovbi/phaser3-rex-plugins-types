declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/AddChild' {
    interface AddChildType {
        add(gameObject: any): this;
        addMultiple(gameObjects: any[]): this;
        addLocal(gameObject: any): this;
        addLocalMultiple(gameObjects: any[]): this;
    }

    const AddChild: AddChildType;
    export default AddChild;
}
