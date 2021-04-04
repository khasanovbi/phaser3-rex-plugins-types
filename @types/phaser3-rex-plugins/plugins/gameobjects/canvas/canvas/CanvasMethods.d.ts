declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/CanvasMethods' {
    import * as Phaser from 'phaser';

    interface CanvasMethodsType {
        clear(): this;

        fill(color: string | CanvasGradient | CanvasPattern): this;

        loadFromURL(url: string, callback?: () => any): this;

        loadFromURLPromise(url: string): Promise<void>;

        getDataURL(type?: string, encoderOptions?: any): string;

        getPixel(x: number, y: number, out?: Phaser.Display.Color): Phaser.Display.Color;

        setPixel(x: number, y: number, r: number, g: number, b: number, a?: number): this;

        setPixel(x: number, y: number, color: Phaser.Display.Color): this;
    }

    const CanvasMethods: CanvasMethodsType;

    export default CanvasMethods;
}
