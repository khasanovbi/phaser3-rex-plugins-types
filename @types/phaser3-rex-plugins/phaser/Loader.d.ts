/// <reference types="phaser" />
/// <reference types="webfontloader" />

import AwaitLoaderCallback from 'phaser3-rex-plugins/plugins/loader/awaitloader/AwaitLoaderCallback';
import WebFontLoaderCallback from 'phaser3-rex-plugins/plugins/loader/webfontloader/WebFontLoaderCallback';
import ImageURILoaderCallback from 'phaser3-rex-plugins/plugins/loader/imageuri/ImageURILoaderCallback';
import ScriptTagLoaderCallback from 'phaser3-rex-plugins/plugins/loader/scripttag/ScriptTagLoaderCallback';

declare global {
    namespace Phaser.Loader {
        interface LoaderPlugin {
            rexAwait: typeof AwaitLoaderCallback;

            rexImageURI: typeof ImageURILoaderCallback;

            rexScriptTag: typeof ScriptTagLoaderCallback;

            rexWebFont: typeof WebFontLoaderCallback;
        }
    }
}
