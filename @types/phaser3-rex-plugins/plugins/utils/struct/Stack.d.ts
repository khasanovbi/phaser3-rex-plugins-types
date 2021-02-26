declare module 'phaser3-rex-plugins/plugins/utils/struct/Stack' {
    export default class Stack<T = any> {
        items: T[];

        destroy(): void;

        pop(): T | null;

        push(l: T): this;

        pushMultiple(arr: T[]): this;

        clear(): this;
    }
}
