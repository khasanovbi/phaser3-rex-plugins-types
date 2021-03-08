declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Base' {
    export default class Base
        extends Phaser.GameObjects.Zone
        implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.Flip {
        children: any[];
        alpha: number;
        alphaBottomLeft: number;
        alphaBottomRight: number;
        alphaTopLeft: number;
        alphaTopRight: number;
        flipX: boolean;
        flipY: boolean;

        constructor(scene: Phaser.Scene, x: number, y: number, width?: number, height?: number);

        destroy(fromScene?: boolean): void;

        contains(gameObject: any): boolean;

        add(gameObjects: any): this;

        remove(gameObjects: any, destroyChild?: boolean): this;

        clear(destroyChild?: boolean): this;

        clearAlpha(): this;

        resetFlip(): this;

        setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

        setFlip(x: boolean, y: boolean): this;

        setFlipX(value: boolean): this;

        setFlipY(value: boolean): this;

        toggleFlipX(): this;

        toggleFlipY(): this;
    }
}
