declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ScrollFactor' {
    interface ScrollFactorType {
        updateChildScrollFactor(child: any): this;
        syncScrollFactor(): this;
    }

    const ScrollFactor: ScrollFactorType;
    export default ScrollFactor;
}
