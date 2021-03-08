/// <reference types="phaser" />
/// <reference types="webfontloader" />

import AwaitLoaderCallback from 'phaser3-rex-plugins/plugins/loader/awaitloader/AwaitLoaderCallback';
import WebFontLoaderCallback from 'phaser3-rex-plugins/plugins/loader/awaitloader/WebFontLoaderCallback';

declare global {
    namespace Phaser.Loader {
        interface LoaderPlugin {
            rexAwait: typeof AwaitLoaderCallback;

            rexWebFont: typeof WebFontLoaderCallback;
        }
    }
}
