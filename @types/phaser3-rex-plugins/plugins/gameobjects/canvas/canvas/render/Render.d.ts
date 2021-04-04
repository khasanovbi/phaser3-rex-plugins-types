declare module 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/render/Render' {
    import WebGLRenderer from 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/render/WebGLRenderer';
    import CanvasRenderer from 'phaser3-rex-plugins/plugins/gameobjects/canvas/canvas/render/CanvasRenderer';

    interface RenderType {
        renderWebGL: typeof WebGLRenderer;
        renderCanvas: typeof CanvasRenderer;
    }

    const Render: RenderType;
    export default Render;
}
