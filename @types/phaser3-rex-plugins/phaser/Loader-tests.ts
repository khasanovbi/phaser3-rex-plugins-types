function testAwaitLoaderCallback() {
    const scene = new Phaser.Scene({});

    scene.load.rexAwait(function (successCallback, failureCallback) {
        successCallback();
    });

    const scope = {};
    scene.load.rexAwait(function (successCallback, failureCallback) {
        successCallback();
    }, scope);

    scene.load.rexAwait('key', {
        callback: (successCallback: () => void, failureCallback: () => void): void => {
            successCallback();
        },
    });

    scene.load.rexAwait({
        key: 'key',
        config: {
            callback: (successCallback: () => void, failureCallback: () => void): void => {
                successCallback();
            },
        },
    });

    scene.load.rexAwait({
        callback: (successCallback: () => void, failureCallback: () => void): void => {
            successCallback();
        },
    });
}

function testWebFontLoaderCallback() {
    const scene = new Phaser.Scene({});

    scene.load.rexWebFont({
        google: {
            families: ['Bangers'],
        },
        testString: undefined,
        testInterval: 20,
    });

    scene.load.rexWebFont({
        google: {
            families: ['Droid Sans', 'Droid Serif:bold'],
        },
    });

    scene.load.rexWebFont({
        custom: {
            families: ['My Font', 'My Other Font:n4,i4,n7'],
            urls: ['/fonts.css'],
        },
    });
}
