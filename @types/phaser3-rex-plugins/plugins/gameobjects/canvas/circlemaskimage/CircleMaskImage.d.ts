declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/circlemaskimage/CircleMaskImage' {
    import Canvas from 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/Canvas';

    type MaskTypeMap = {
        circle: 0;
        ellipse: 1;
        roundRectangle: 2;
    };

    interface RadiusXY {
        x: number;
        y: number;
    }

    interface CornerRadius {
        tl: number | RadiusXY;
        tr: number | RadiusXY;
        bl: number | RadiusXY;
        br: number | RadiusXY;
    }

    export type MaskType = keyof MaskTypeMap | MaskTypeMap[keyof MaskTypeMap] | null;

    export type CircleMaskImageConfig = {
        maskType?: MaskType;
        backgroundColor?: string | CanvasGradient | CanvasPattern;
        radius?: number | RadiusXY | CornerRadius;
        iteration?: null | number;
    };

    export type CircleMaskImageConfigOrMaskType = CircleMaskImageConfig | MaskType;

    export default class CircleMaskImage extends Canvas {
        protected _textureKey: string;
        protected _frameName: string | number;

        constructor(
            scene: Phaser.Scene,
            x: number,
            y: number,
            key: string,
            frame?: string | number,
            config?: CircleMaskImageConfigOrMaskType,
        );
        constructor(scene: Phaser.Scene, x: number, y: number, key: string, config?: CircleMaskImageConfigOrMaskType);

        setTexture(key: string, frame?: string | number, config?: CircleMaskImageConfigOrMaskType): this;
        setTexture(key: string, config?: CircleMaskImageConfigOrMaskType): this;
    }
}
