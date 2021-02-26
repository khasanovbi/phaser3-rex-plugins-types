declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Alpha' {
    interface AlphaType {
        updateChildAlpha(child: any): this;

        syncAlpha(): this;

        resetChildAlphaState(gameObject: any): this;

        setChildAlpha(gameObject: any, alpha: any): this;

        setChildLocalAlpha(gameObject: any, alpha: any): this;
    }

    const Alpha: AlphaType;
    export default Alpha;
}
