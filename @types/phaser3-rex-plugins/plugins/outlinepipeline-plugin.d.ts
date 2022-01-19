declare module 'phaser3-rex-plugins/plugins/outlinepipeline-plugin' {
    import BasePostFxPipelinePlugin, {BasePostFxPipelineConfig} from 'phaser3-rex-plugins/plugins/utils/renderer/BasePostFxPipelinePlugin';
    
    export interface OutlinePipelineConfig extends BasePostFxPipelineConfig {
        /**
        * Outline thickness
        */
        thickness: number,
        /**
        * Outline color
        */
        outlineColor: number
    }
    export default class OutlinePipelinePlugin extends BasePostFxPipelinePlugin {
        constructor(pluginManager: Phaser.Plugins.PluginManager);
        add(gameObject: Phaser.GameObjects.GameObject, config: OutlinePipelineConfig): Phaser.Renderer.WebGL.Pipelines.PostFXPipeline;
    }    
}