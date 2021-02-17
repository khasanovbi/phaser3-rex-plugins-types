declare module 'phaser3-rex-plugins/plugins/utils/struct/Stack' {
    export default class Stack {
        items: any[];
        destroy(): void;
        pop(): any;
        push(l: any): this;
        pushMultiple(arr: any): this;
        clear(): this;
    }
}
