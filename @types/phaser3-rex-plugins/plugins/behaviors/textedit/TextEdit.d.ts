declare module 'phaser3-rex-plugins/plugins/behaviors/textedit/TextEdit' {
  export default class TextEdit {
    constructor(gameObject: Phaser.GameObjects.GameObject);
    gameObject: Phaser.GameObjects.GameObject
    scene: Phaser.Scene
    inputText: string
    onClose: Function
    delayCall: Phaser.Time.TimerEvent
    boot(): this
    shutdown(): this
    destroy(): this
    open(config: any, onCloseCallback: Function): this
    close(): this
    isOpened(): boolean
    text(): string
  }
}
