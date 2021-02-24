declare module 'phaser3-rex-plugins/templates/ui/ui-plugin' {
  import * as Phaser from 'phaser';
  import ObjectFactory from 'phaser3-rex-plugins/templates/ui/ObjectFactory';
  import GetViewport from 'phaser3-rex-plugins/plugins/utils/system/GetViewport';
  import { GetParentSizer, GetTopmostSizer } from 'phaser3-rex-plugins/templates/ui/utils/GetParentSizer';
  import { Hide, Show, IsShown } from 'phaser3-rex-plugins/templates/ui/utils/Hide';
  import { WaitEvent, WaitComplete } from 'phaser3-rex-plugins/plugins/utils/promise/WaitEvent';
  import Edit from 'phaser3-rex-plugins/plugins/behaviors/textedit/Edit';
  import IsPointerInBounds from 'phaser3-rex-plugins/plugins/utils/input/IsPointerInBounds';

  export default class UIPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager);
    add: ObjectFactory
    start(): void
    get viewport(): typeof GetViewport
    getParentSizer: typeof GetParentSizer
    getTopmostSizer: typeof GetTopmostSizer
    hide: typeof Hide
    show: typeof Show
    isShown: typeof IsShown
    edit: typeof Edit
    isInTouching: typeof IsPointerInBounds
    waitEvent: WaitEvent
    waitComplete: WaitComplete
    setChildrenInteractive(gameObject: Phaser.GameObjects.GameObject, config: any): Phaser.GameObjects.GameObject // todo replace config with real type: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/ui-overview/#set-children-interactive
  }
}