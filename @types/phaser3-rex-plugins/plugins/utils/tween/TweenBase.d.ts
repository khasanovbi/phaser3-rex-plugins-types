declare module 'phaser3-rex-plugins/utils/tween/TweenBase' {
    import EventEmitterMethods from 'phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitterMethods';

    interface TweenBaseConfig {
        eventEmitter: Phaser.Events.EventEmitter | false;
    }

    export default class TweenBase implements EventEmitterMethods<Phaser.Tweens.Tween> {
        constructor(parent: Phaser.GameObjects.GameObject, config: TweenBaseConfig);

        boot(): void;

        shutdown(): this;

        destroy(): this;

        start(tweenConfig: Phaser.Types.Tweens.TweenBuilderConfig): this;

        restart(): this;

        stop(): this;

        complete(): this;

        readonly isRunning: boolean;

        addListener(event: string | symbol, fn: Function, context?: any): this;

        destroyEventEmitter(): this;

        emit(event: string | symbol, ...args: any[]): this;

        getEventEmitter(): Phaser.Tweens.Tween;

        listenerCount(event: string | symbol): number;

        listeners(event: string | symbol): Function[];

        off(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

        on(event: string | symbol, fn: Function, context?: any): this;

        once(event: string | symbol, fn: Function, context?: any): this;

        removeAllListeners(event?: string | symbol): this;

        removeListener(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

        setEventEmitter(
            eventEmitter?: false | Phaser.Tweens.Tween,
            EventEmitterClass?: {new (): Phaser.Tweens.Tween},
        ): this;
    }
}
