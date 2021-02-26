declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Active' {
    interface ActiveType {
        updateChildActive(child: any): this;

        syncActive(): this;

        resetChildActiveState(gameObject: any): this;

        setChildActive(gameObject: any, active: any): this;

        setChildLocalActive(gameObject: any, active: any): this;
    }

    const Active: ActiveType;
    export default Active;
}
