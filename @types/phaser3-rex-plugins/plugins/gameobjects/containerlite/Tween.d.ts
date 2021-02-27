declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Tween' {
    interface TweenType {
        tweenChild(tweenConfig: Phaser.Types.Tweens.TweenBuilderConfig): Phaser.Tweens.Tween;
        tween(tweenConfig: Phaser.Types.Tweens.TweenBuilderConfig): Phaser.Tweens.Tween;
    }

    const Tween: TweenType;
    export default Tween;
}
