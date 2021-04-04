declare module 'phaser3-rex-plugins/plugins/loader/webfontloader/WebFontLoaderCallback' {
    interface WebFontLoaderConfig
        extends Omit<
            WebFont.Config,
            'active' | 'inactive' | 'fontactive' | 'fontinactive' | 'loading' | 'fontloading'
        > {
        testString?: string;
        testInterval?: number;
    }

    interface PartialFileConfig extends Partial<Phaser.Types.Loader.FileConfig> {
        config: WebFontLoaderConfig;
    }

    function loaderCallback(config: PartialFileConfig | WebFontLoaderConfig): void;

    function loaderCallback(key: string, config: WebFontLoaderConfig): void;

    export default loaderCallback;
}
