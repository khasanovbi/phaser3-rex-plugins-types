declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Tween' {
    interface TweenType {
        tweenChild(tweenConfig: any): any;
        tween(tweenConfig: any): any;
    }

    const Tween: TweenType;
    export default Tween;
}
