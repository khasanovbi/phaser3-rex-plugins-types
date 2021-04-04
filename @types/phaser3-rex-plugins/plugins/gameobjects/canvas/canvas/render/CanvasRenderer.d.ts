declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/render/CanvasRenderer' {
    import * as Phaser from 'phaser';

    export default function CanvasRenderer(
        renderer: Phaser.Renderer.WebGL.WebGLRenderer,
        src: Phaser.GameObjects.GameObject,
        camera: Phaser.Cameras.Scene2D.Camera,
        parentMatrix?: Phaser.GameObjects.Components.TransformMatrix,
    ): void;
}
