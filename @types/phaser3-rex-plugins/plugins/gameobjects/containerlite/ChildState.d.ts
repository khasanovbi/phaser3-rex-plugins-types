declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ChildState' {
    interface ChildStateType {
        getLocalState(gameObject: any): any;
        resetChildState(gameObject: any): this;
        resetChildrenState(gameObjects: any[]): this;
        syncProperties(): this;
    }

    const ChildState: ChildStateType;
    export default ChildState;
}
