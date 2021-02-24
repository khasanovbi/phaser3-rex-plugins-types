declare module 'phaser3-rex-plugins/templates/ui/ObjectFactory' {
  export default class ObjectFactory {
    constructor(scene: Phaser.Scene)
    static register(type: string, callback: Function): void
  }
}