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

        constructor(scene: any, x: any, y: any, width: any, height: any);

        // TODO: invalid inheritance destroy(fromScene: any): void;
        destroy(): void;

        contains(gameObject: any): boolean;

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
