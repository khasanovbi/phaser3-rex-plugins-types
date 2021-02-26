declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Scale' {
    interface ScaleType {
        updateChildScale(child: any): this;
        syncScale(): this;
        resetChildScaleState(gameObject: any): this;
        setChildScale(gameObject: any, scaleX: any, scaleY: any): this;
        setChildLocalScale(gameObject: any, scaleX: any, scaleY: any): this;
    }

    const Scale: ScaleType;
    export default Scale;
}
