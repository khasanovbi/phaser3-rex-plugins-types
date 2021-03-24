declare module 'phaser3-rex-plugins/plugins/utils/promise/WaitEvent' {
    export type WaitEvent = (
        eventEmitter: Phaser.Events.EventEmitter,
        eventName: string,
    ) => Promise<(resolve: Function, reject: Function) => {}>;
    export type WaitComplete = (
        eventEmitter: Phaser.Events.EventEmitter,
    ) => Promise<(resolve: Function, reject: Function) => {}>;
}
