declare module 'phaser3-rex-plugins/templates/ui/ui-plugin' {
  import * as Phaser from 'phaser';
  import TextEdit from 'phaser3-rex-plugins/plugins/behaviors/textedit/TextEdit';
  import ObjectFactory from 'phaser3-rex-plugins/templates/ui/ObjectFactory';

  type preTest = (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => void
  type postTest = (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => void

  export default class UIPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager);
    add: ObjectFactory
    getParentSizer(gameObject: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject
    getTopmostSizer(gameObject: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject
    hide(gameObject: Phaser.GameObjects.GameObject): void
    show(gameObject: Phaser.GameObjects.GameObject): void
    isShown(gameObject: Phaser.GameObjects.GameObject): boolean
    edit(gameObject: Phaser.GameObjects.GameObject, config: any, onCloseCallback: Function): TextEdit // todo replace config with real config: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/textedit/#open-editor
    isInTouching(gameObject: Phaser.GameObjects.GameObject, pointer: Phaser.Input.Pointer, preTest: preTest, postTest: postTest): boolean
    waitEvent(eventEmitter: any, eventName: string): Promise<(resolve: Function, reject: Function) => {}> // todo real type for eventemitter
    waitComplete(eventEmitter: any): Promise<(resolve: Function, reject: Function) => {}> // todo real type for eventemitter
    setChildrenInteractive(gameObject: Phaser.GameObjects.GameObject, config: any): Phaser.GameObjects.GameObject // todo replace config with real type: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/ui-overview/#set-children-interactive
  }
}