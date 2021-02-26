declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Parent' {
    interface ParentType {
        setParent(gameObject: any, parent?: any): this;
        getParent(gameObject?: any): any;
        getTopmostParent(gameObject?: any): any;
    }

    const Parent: ParentType;
    export default Parent;
}
