declare module 'phaser3-rex-plugins/plugins/utils/input/IsPointerInBounds' {
    export type TestFunc = (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean;

    export default function IsPointerInBounds(
        gameObject: Phaser.GameObjects.GameObject,
        pointer: Phaser.Input.Pointer,
        preTest?: TestFunc,
        postTest?: TestFunc,
    ): boolean;
}
