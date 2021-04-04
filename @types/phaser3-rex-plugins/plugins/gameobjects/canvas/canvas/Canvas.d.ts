declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/Canvas' {
    import * as Phaser from 'phaser';

    import CanvasMethods from 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/CanvasMethods';
    import Render from 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/render/Render';
    import TextureMethods from 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/TextureMethods';

    type RenderType = typeof Render;
    type CanvasMethodsType = typeof CanvasMethods;
    type TextureMethodsType = typeof TextureMethods;

    export default class Canvas
        extends Phaser.GameObjects.GameObject
        implements
            Phaser.GameObjects.Components.Alpha,
            Phaser.GameObjects.Components.BlendMode,
            Phaser.GameObjects.Components.Crop,
            Phaser.GameObjects.Components.Depth,
            Phaser.GameObjects.Components.Flip,
            Phaser.GameObjects.Components.GetBounds,
            Phaser.GameObjects.Components.Mask,
            Phaser.GameObjects.Components.Origin,
            Phaser.GameObjects.Components.Pipeline,
            Phaser.GameObjects.Components.ScrollFactor,
            Phaser.GameObjects.Components.Tint,
            Phaser.GameObjects.Components.Transform,
            Phaser.GameObjects.Components.Visible,
            RenderType,
            CanvasMethodsType,
            TextureMethodsType {
        resolution: number;
        dirty: boolean;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2DSettings;
        alpha: number;
        alphaBottomLeft: number;
        alphaBottomRight: number;
        alphaTopLeft: number;
        alphaTopRight: number;
        angle: number;
        blendMode: Phaser.BlendModes | string;
        defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;
        depth: number;
        displayOriginX: number;
        displayOriginY: number;
        flipX: boolean;
        flipY: boolean;
        frame: Phaser.Textures.Frame;
        hasPostPipeline: boolean;
        isCropped: boolean;
        readonly isTinted: boolean;
        mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;
        originX: number;
        originY: number;
        pipeline: Phaser.Renderer.WebGL.WebGLPipeline;
        pipelineData: object;
        postPipeline: Phaser.Renderer.WebGL.Pipelines.PostFXPipeline[];
        rotation: number;
        scale: number;
        scaleX: number;
        scaleY: number;
        scrollFactorX: number;
        scrollFactorY: number;
        texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;
        tint: number;
        tintBottomLeft: number;
        tintBottomRight: number;
        tintFill: boolean;
        tintTopLeft: number;
        tintTopRight: number;
        visible: boolean;
        w: number;
        x: number;
        y: number;
        z: number;

        constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number);

        get width(): number;
        set width(value: number);

        get height(): number;
        set height(value: number);

        setSize(width: number, height: number): this;

        get displayWidth(): number;
        set displayWidth(value: number);

        get displayHeight(): number;
        set displayHeight(value: number);

        setDisplaySize(width: number, height: number): this;

        getCanvas(readOnly?: boolean): HTMLCanvasElement;

        getContext(readOnly?: boolean): CanvasRenderingContext2D;

        needRedraw(): this;

        preDestroy(): void;

        resize(width: number, height: number): this;

        renderWebGL(
            renderer: Phaser.Renderer.Canvas.CanvasRenderer,
            src: Phaser.GameObjects.GameObject,
            camera: Phaser.Cameras.Scene2D.Camera,
            parentMatrix?: Phaser.GameObjects.Components.TransformMatrix,
        ): void;

        renderCanvas(
            renderer: Phaser.Renderer.WebGL.WebGLRenderer,
            src: Phaser.GameObjects.GameObject,
            camera: Phaser.Cameras.Scene2D.Camera,
            parentMatrix?: Phaser.GameObjects.Components.TransformMatrix,
        ): void;

        setPixel(x: number, y: number, r: number, g: number, b: number, a?: number): this;
        setPixel(x: number, y: number, color: Phaser.Display.Color): this;

        clear(): this;

        clearAlpha(): this;

        clearMask(destroyMask?: boolean): this;

        clearTint(): this;

        copyPosition(
            source: Phaser.Types.Math.Vector2Like | Phaser.Types.Math.Vector3Like | Phaser.Types.Math.Vector4Like,
        ): this;

        createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

        createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

        fill(color: string | CanvasGradient | CanvasPattern): this;

        getBottomCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

        getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

        getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

        getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

        getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

        getDataURL(type?: string, encoderOptions?: any): string;

        getLeftCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

        getLocalPoint(
            x: number,
            y: number,
            point?: Phaser.Math.Vector2,
            camera?: Phaser.Cameras.Scene2D.Camera,
        ): Phaser.Math.Vector2;

        getLocalTransformMatrix(
            tempMatrix?: Phaser.GameObjects.Components.TransformMatrix,
        ): Phaser.GameObjects.Components.TransformMatrix;

        getParentRotation(): number;

        getPipelineName(): string;

        getPixel(x: number, y: number, out?: Phaser.Display.Color): Phaser.Display.Color;

        getPostPipeline(
            pipeline: string | Function | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline,
        ): Phaser.Renderer.WebGL.Pipelines.PostFXPipeline | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline[];

        getRightCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

        getTopCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

        getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

        getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

        getWorldTransformMatrix(
            tempMatrix?: Phaser.GameObjects.Components.TransformMatrix,
            parentMatrix?: Phaser.GameObjects.Components.TransformMatrix,
        ): Phaser.GameObjects.Components.TransformMatrix;

        initPipeline(pipeline: string | Phaser.Renderer.WebGL.WebGLPipeline): boolean;

        loadFromURL(url: string, callback?: () => any): this;

        loadFromURLPromise(url: string): Promise<void>;

        removePostPipeline(pipeline: string | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline): this;

        resetFlip(): this;

        resetPipeline(resetPostPipelines?: boolean, resetData?: boolean): boolean;

        resetPostPipeline(resetData?: boolean): void;

        setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

        setAngle(degrees?: number): this;

        setBlendMode(value: string | Phaser.BlendModes): this;

        setCrop(x?: number | Phaser.Geom.Rectangle, y?: number, width?: number, height?: number): this;

        setDepth(value: number): this;

        setDisplayOrigin(x?: number, y?: number): this;

        setFlip(x: boolean, y: boolean): this;

        setFlipX(value: boolean): this;

        setFlipY(value: boolean): this;

        setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

        setOrigin(x?: number, y?: number): this;

        setOriginFromFrame(): this;

        setPipeline(
            pipeline: string | Phaser.Renderer.WebGL.WebGLPipeline,
            pipelineData?: object,
            copyData?: boolean,
        ): this;

        setPipelineData(key: string, value?: any): this;

        setPosition(x?: number, y?: number, z?: number, w?: number): this;

        setPostPipeline(
            pipelines:
                | string
                | string[]
                | Function
                | Function[]
                | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline
                | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline[],
            pipelineData?: object,
            copyData?: boolean,
        ): this;

        setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

        setRotation(radians?: number): this;

        setScale(x: number, y?: number): this;

        setScrollFactor(x: number, y?: number): this;

        setTint(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

        setTintFill(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

        setVisible(value: boolean): this;

        setW(value?: number): this;

        setX(value?: number): this;

        setY(value?: number): this;

        setZ(value?: number): this;

        toggleFlipX(): this;

        toggleFlipY(): this;

        updateDisplayOrigin(): this;

        generateTexture(key: string, x?: number, y?: number, width?: number, height?: number): this;

        loadTexture(key: string, frame?: string | number): this;

        updateTexture(
            callback?: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => any,
            scope?: any,
        ): this;
    }
}
