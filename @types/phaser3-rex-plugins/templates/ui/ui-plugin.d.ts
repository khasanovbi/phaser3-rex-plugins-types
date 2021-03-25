declare module 'phaser3-rex-plugins/templates/ui/ui-plugin' {
    import * as Phaser from 'phaser';
    import ObjectFactory from 'phaser3-rex-plugins/templates/ui/ObjectFactory';
    import {GetParentSizer, GetTopmostSizer} from 'phaser3-rex-plugins/templates/ui/utils/GetParentSizer';
    import {Hide, IsShown, Show} from 'phaser3-rex-plugins/templates/ui/utils/Hide';
    import {WaitComplete, WaitEvent} from 'phaser3-rex-plugins/templates/ui/utils/WaitEvent';
    import Edit from 'phaser3-rex-plugins/plugins/behaviors/textedit/Edit';
    import IsPointerInBounds, {TestFunc} from 'phaser3-rex-plugins/plugins/utils/input/IsPointerInBounds';
    import SetChildrenInteractive from 'phaser3-rex-plugins/templates/ui/utils/setchildreninteractive/SetChildrenInteractive';
    import TextEdit, {
        OnCloseCallback,
        TextEditOpenConfig,
    } from 'phaser3-rex-plugins/plugins/behaviors/textedit/TextEdit';

    interface methods {
        getParentSizer: typeof GetParentSizer;
        getTopmostSizer: typeof GetTopmostSizer;
        hide: typeof Hide;
        show: typeof Show;
        isShown: typeof IsShown;
        edit: typeof Edit;
        isInTouching: typeof IsPointerInBounds;
        waitEvent: typeof WaitEvent;
        waitComplete: typeof WaitComplete;
        setChildrenInteractive: typeof SetChildrenInteractive;
    }

    export default class UIPlugin extends Phaser.Plugins.ScenePlugin implements methods {
        constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager);

        add: ObjectFactory;

        start(): void;

        get viewport(): Phaser.Geom.Rectangle;

        edit(
            gameObject: Phaser.GameObjects.GameObject,
            config: TextEditOpenConfig,
            onCloseCallback: OnCloseCallback,
        ): TextEdit;

        getParentSizer(gameObject: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject | undefined;

        getTopmostSizer(gameObject: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject | undefined;

        hide(gameObject: Phaser.GameObjects.GameObject): void;

        isInTouching(
            gameObject: Phaser.GameObjects.GameObject,
            pointer: Phaser.Input.Pointer,
            preTest?: TestFunc,
            postTest?: TestFunc,
        ): boolean;

        isShown(gameObject: Phaser.GameObjects.GameObject): boolean;

        setChildrenInteractive(gameObject: Phaser.GameObjects.GameObject, config: any): Phaser.GameObjects.GameObject;

        show(gameObject: Phaser.GameObjects.GameObject): void;

        waitComplete(eventEmitter: Phaser.Events.EventEmitter): Promise<void>;

        waitEvent(eventEmitter: Phaser.Events.EventEmitter, eventName: string): Promise<void>;
    }
}
