declare module 'phaser3-rex-plugins/plugins/behaviors/textedit/TextEdit' {
    import InputText, {TextChangedCallback} from 'phaser3-rex-plugins/plugins/gameobjects/dom/InputText';

    export interface OnTextEditClosed {
        (obj: Phaser.GameObjects.GameObject): void;
    }

    export interface TextEditOpenConfig {
        onClose?: OnTextEditClosed;
        onTextChanged?: TextChangedCallback;
    }

    export default class TextEdit {
        constructor(gameObject: Phaser.GameObjects.GameObject);
        gameObject: Phaser.GameObjects.GameObject;
        scene: Phaser.Scene;
        inputText?: string;
        onClose?: OnTextEditClosed;
        delayCall?: Phaser.Time.TimerEvent;
        boot(): this;
        shutdown(): this;
        destroy(): this;
        open(config: TextEditOpenConfig, onCloseCallback: OnTextEditClosed): this;
        open(onCloseCallback: OnTextEditClosed): this;
        close(): this;
        get isOpened(): boolean;
        get text(): InputText;
    }
}
