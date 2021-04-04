declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/TextureMethods' {
    interface TextureMethodsType {
        updateTexture(
            callback?: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => any,
            scope?: any,
        ): this;

        generateTexture(key: string, x?: number, y?: number, width?: number, height?: number): this;

        loadTexture(key: string, frame?: string | number): this;
    }

    const TextureMethods: TextureMethodsType;

    export default TextureMethods;
}
