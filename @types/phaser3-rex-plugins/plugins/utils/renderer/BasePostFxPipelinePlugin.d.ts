declare module 'phaser3-rex-plugins/plugins/utils/renderer/BasePostFxPipelinePlugin' {
    import * as Phaser from 'phaser';
    export default class BasePostFxPipelinePlugin extends Phaser.Plugins.BasePlugin {
        setPostPipelineClass(
            PostFxPipelineClass: BasePostFxPipelinePlugin,
            postFxPipelineName: string,
        ): BasePostFxPipelinePlugin;

        start(): void;

        /**
         * Adds the fx pipeline to a given GameObject
         * @param {Phaser.GameObjects.GameObject} gameObject The GameObject the fx should be applied on
         * @param {BasePostFxPipelineConfig} config Config to be applied for the fx
         */
        add(
            gameObject: Phaser.GameObjects.GameObject,
            config: BasePostFxPipelineConfig,
        ): Phaser.Renderer.WebGL.Pipelines.PostFXPipeline;

        /**
         * Removes the fx pipeline for a given GameObject
         * Will only remove pipelines of the same pipeline class
         * @param {Phaser.GameObjects.GameObject} gameObject The GameObject to remove an fx pipeline from.
         * @param {string} [name] Only remove fx pipelines matching this string
         */
        remove(gameObject: Phaser.GameObjects.GameObject, name?: string): [] | void;
        /**
         * Removes the fx pipeline for a given GameObject
         * Will only remove pipelines of the same pipeline class
         * @param {Phaser.GameObjects.GameObject} gameObject The GameObject to get an fx pipeline from.
         * @param {string} [name] Only get fx pipelines matching this string
         */
        get(
            gameObject: Phaser.GameObjects.GameObject,
            name?: string,
        ): BasePostFxPipelinePlugin[] | BasePostFxPipelinePlugin;
    }

    export interface BasePostFxPipelineConfig {
        /**
         * Name to be used for targeted removal or retrieval.
         */
        name?: string;
    }
}
