declare module 'phaser3-rex-plugins/plugins/utils/system/GetViewport' {
    export default function GetViewport(
        scene: Phaser.Scene,
        out?: boolean | Phaser.Geom.Rectangle,
    ): Phaser.Geom.Rectangle;
}
