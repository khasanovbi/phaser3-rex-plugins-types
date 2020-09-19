declare namespace Phaser.Loader {
    interface LoaderPlugin {
        rexAwait(callback: (successCallback: () => void, failureCallback: () => void) => void): void;
    }
}
