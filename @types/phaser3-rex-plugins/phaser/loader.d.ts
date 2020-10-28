/// <reference types="phaser" />
/// <reference types="webfontloader" />

declare namespace Phaser.Loader {
    type PartialFileConfig = Partial<Phaser.Types.Loader.FileConfig>;

    interface WebFontConfig
        extends Omit<
            WebFont.Config,
            'active' | 'inactive' | 'fontactive' | 'fontinactive' | 'loading' | 'fontloading'
        > {
        testString?: string;
        testInterval?: number;
    }

    interface LoaderPlugin {
        rexAwait(callback: (successCallback: () => void, failureCallback: () => void) => void, scope?: any): void;

        rexAwait(config: PartialFileConfig): void;

        rexAwait(key: string, config: PartialFileConfig): void;

        rexWebFont(config: WebFontConfig): void;

        rexWebFont(key: string, config: WebFontConfig): void;
    }
}
