declare module 'phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitter' {
    export default class EventEmitter extends EE<string | symbol> {
        shutdown(): void;
        destroy(): void;
        on(event: string | symbol, fn: EE.ListenerFn, context?: any): any;
        addListener(event: string | symbol, fn: EE.ListenerFn, context?: any): any;
        once(event: string | symbol, fn: EE.ListenerFn, context?: any): any;
        removeListener(event: string | symbol, fn?: EE.ListenerFn | undefined, context?: any, once?: boolean | undefined): any;
        off(event: string | symbol, fn?: EE.ListenerFn | undefined, context?: any, once?: boolean | undefined): any;
        removeAllListeners(event?: string | symbol | undefined): any;
    }
    import * as EE from "phaser3-rex-plugins/node_modules/eventemitter3";
}