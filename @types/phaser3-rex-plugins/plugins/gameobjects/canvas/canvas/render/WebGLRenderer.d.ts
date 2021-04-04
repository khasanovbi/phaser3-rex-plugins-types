declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/render/WebGLRenderer' {
    import * as Phaser from 'phaser';

    export default function WebGLRenderer(
        renderer: Phaser.Renderer.Canvas.CanvasRenderer,
        src: Phaser.GameObjects.GameObject,
        camera: Phaser.Cameras.Scene2D.Camera,
        parentMatrix?: Phaser.GameObjects.Components.TransformMatrix,
    ): void;
}
