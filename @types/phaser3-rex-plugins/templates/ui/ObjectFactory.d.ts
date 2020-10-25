declare module 'phaser3-rex-plugins/templates/ui/ObjectFactory' {
  export default class ObjectFactory {
    constructor(scene: Phaser.Scene)
    scene: Phaser.Scene
    register(type: string, callback: Function): void
  }

}