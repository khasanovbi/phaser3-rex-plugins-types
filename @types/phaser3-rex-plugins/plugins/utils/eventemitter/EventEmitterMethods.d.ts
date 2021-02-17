declare module 'phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitterMethods' {
    export default interface EventEmitterMethods<T extends Phaser.Events.EventEmitter = any> {
        setEventEmitter(eventEmitter?: T | false, EventEmitterClass?: new () => T): this;

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
    }
}
