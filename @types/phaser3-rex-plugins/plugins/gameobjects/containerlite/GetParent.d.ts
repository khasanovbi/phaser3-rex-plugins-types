declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/GetParent' {
    export function GetParent(gameObject: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject | undefined;

    export function GetTopmostParent(
        gameObject: Phaser.GameObjects.GameObject,
    ): Phaser.GameObjects.GameObject | undefined;
}
