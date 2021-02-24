declare module 'phaser3-rex-plugins/plugins/gameobjects/dom/InputText' {
  export interface TextChangedCallback {
    (obj: Phaser.GameObjects.GameObject, text: string): void
  }

  export default class InputText extends Phaser.GameObjects.DOMElement {
    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, config?: any);

    get text(): string;
    set text(value: string);
    setText(value: string): this;

    get maxLength(): number;
    set maxLength(value: number);
    setMaxLength(value: number): this;

    get minLength(): number;
    set minLength(value: number);
    setMinLength(value: number): this;

    get placeholder(): string;
    set placeholder(value: string);
    setPlaceholder(value: string): this;

    selectText(): this;

    get tooltip(): string;
    set tooltip(value: string);
    setTooltip(value: string): this;

    setTextChangedCallback(callback: TextChangedCallback): this;

    get readOnly(): boolean;
    set readOnly(value: boolean);
    setReadOnly(value: boolean): this;

    get spellCheck(): boolean;
    set spellCheck(value: boolean);
    setSpellCheck(value: boolean): this;

    get fontColor(): string;
    set fontColor(value: string);
    setFontColor(value: string): this;

    setStyle(key: string, value: string): this;
    getStyle(key: string): string;

    scrollToBottom(): this;

    setEnabled(enabled: boolean): this;

    setBlur(): this;

    setFocus(): this;

    selectAll(): this;
  }
}