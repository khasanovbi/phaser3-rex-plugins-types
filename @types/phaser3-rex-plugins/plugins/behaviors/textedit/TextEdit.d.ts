declare module 'phaser3-rex-plugins/plugins/behaviors/textedit/TextEdit' {
    import InputText, {TextChangedCallback} from 'phaser3-rex-plugins/plugins/gameobjects/dom/inputtext/InputText';

    export type OnCloseCallback = (obj: Phaser.GameObjects.GameObject) => void;

    export interface TextEditOpenConfig {
        onClose?: OnCloseCallback;
        onTextChanged?: TextChangedCallback;
    }

    export default class TextEdit {
        gameObject: Phaser.GameObjects.GameObject;
        scene: Phaser.Scene;
        inputText?: string;
        onClose?: OnCloseCallback;
        delayCall?: Phaser.Time.TimerEvent;

        constructor(gameObject: Phaser.GameObjects.GameObject);

        boot(): this;

        shutdown(): this;

        destroy(): this;

        open(config: TextEditOpenConfig, onCloseCallback: OnCloseCallback): this;
        open(onCloseCallback: OnCloseCallback): this;

        close(): this;

        get isOpened(): boolean;

        get text(): InputText;
    }
}
