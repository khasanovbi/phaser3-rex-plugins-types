declare module 'phaser3-rex-plugins/plugins/utils/promise/WaitEvent' {
    export function WaitEvent(eventEmitter: Phaser.Events.EventEmitter, eventName: string): Promise<void>;

    export function WaitComplete(eventEmitter: Phaser.Events.EventEmitter): Promise<void>;
}
