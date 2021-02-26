declare module 'phaser3-rex-plugins/plugins/data/bank/Bank' {
    interface BankConfig {
        start?: any;
        uidKey?: any;
        remove?: boolean;
    }

    export default class Bank {
        nextId: any;
        uidKey: any;
        autoRemove: any;
        refs: {};
        count: number;

        constructor(config: BankConfig);

        add(gameObject: any, uid: any): any;

        addMultiple(objects: any): this;

        get(uid: any): any;

        has(uid: any): boolean;

        remove(uid: any): this;

        forEach(callback: any, scope: any): void;

        clear(): void;
    }
}
