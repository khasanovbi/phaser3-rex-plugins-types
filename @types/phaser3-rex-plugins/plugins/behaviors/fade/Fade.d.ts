declare module 'phaser3-rex-plugins/plugins/behaviors/fade/Fade' {
    import TweenBase from 'phaser3-rex-plugins/utils/tween/TweenBase';

    enum Mode {
        stop = 0,
        destroy = 1,
        yoyo = 2,
    }

    interface FadeConfig {
        mode: Mode;
        start: number;
        end: number;
        delay: number;
        duration: number;
    }

    export default class Fade extends TweenBase {
        constructor(gameObject: Phaser.GameObjects.GameObject, config: FadeConfig);

        resetFromJSON(o: FadeConfig): this;

        toJSON(): FadeConfig;

        setMode(m: Mode): this;

        setAlphaRange(start: number, end: number): this;

        setDelay(time: number): this;

        setDuration(time: number): this;

        start(): this;
    }
}
