declare module 'phaser3-rex-plugins/plugins/utils/ticktask/TickTask' {
    import EventEmitterMethods from 'phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitterMethods';

    export type TickingMode = 0 | 1 | 2 | 'no' | 'lazy' | 'always';

    export interface TickTaskConfig {
        eventEmitter?: any;
        tickingMode?: TickingMode;
    }

    export default class TickTask<T extends Phaser.Events.EventEmitter = any> implements EventEmitterMethods<T> {
        parent: any;
        private _isRunning: boolean;
        tickingState: boolean;
        tickingMode: TickingMode;

        constructor(parent: any, config: TickTaskConfig);

        setEventEmitter(eventEmitter?: false | T, EventEmitterClass?: new () => T): this;

        destroyEventEmitter(): this;

        getEventEmitter(): T;

        on(event: string | symbol, fn: Function, context?: any): this;

        once(event: string | symbol, fn: Function, context?: any): this;

        off(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

        emit(event: string | symbol, ...args: any[]): this;

        addListener(event: string | symbol, fn: Function, context?: any): this;

        removeListener(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

        removeAllListeners(event?: string | symbol): this;

        listenerCount(event: string | symbol): number;

        listeners(event: string | symbol): Function[];

        boot(): void;

        shutdown(): void;

        setTickingMode(mode: TickingMode): void;

        startTicking(): void;

        stopTicking(): void;

        get isRunning(): boolean;

        set isRunning(value: boolean);

        start(): this;

        pause(): this;

        resume(): this;

        stop(): this;

        complete(): void;
    }
}
