declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Visible' {
    interface VisibleType {
        updateChildVisible(child: any): this;
        syncVisible(): this;
        resetChildVisibleState(gameObject: any): this;
        setChildVisible(child: any, visible: any): this;
        setChildLocalVisible(child: any, visible: any): this;
        setChildMaskVisible(child: any, visible: any): this;
    }

    const Visible: VisibleType;
    export default Visible;
}
