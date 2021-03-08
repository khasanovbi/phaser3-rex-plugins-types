declare module 'phaser3-rex-plugins/plugins/loader/awaitloader/AwaitLoaderCallback' {
    type AwaitLoaderConfig = {
        callback: (successCallback: () => void, failureCallback: () => void) => void;
        scope?: any;
    };

    interface PartialFileConfig extends Partial<Phaser.Types.Loader.FileConfig> {
        config: AwaitLoaderConfig;
    }

    function loaderCallback(
        callback: (successCallback: () => void, failureCallback: () => void) => void,
        scope?: any,
    ): void;

    function loaderCallback(config: PartialFileConfig | AwaitLoaderConfig): void;

    function loaderCallback(key: string, config: AwaitLoaderConfig): void;

    export default loaderCallback;
}
