declare module 'phaser3-rex-plugins/plugins/data/bank/Bank' {
    export default class Bank {
        constructor(config: any);
        nextId: any;
        uidKey: any;
        autoRemove: any;
        refs: {};
        count: number;
        add(gameObject: any, uid: any): any;
        addMultiple(objects: any): Bank;
        get(uid: any): any;
        has(uid: any): boolean;
        remove(uid: any): Bank;
        forEach(callback: any, scope: any): void;
        clear(): void;
    }
}
