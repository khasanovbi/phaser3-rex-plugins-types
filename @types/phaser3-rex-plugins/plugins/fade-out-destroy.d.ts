declare module 'phaser3-rex-plugins/plugins/fade-out-destroy' {
    import * as Phaser from 'phaser';
    import Fade from 'phaser3-rex-plugins/plugins/behaviors/fade/Fade';

    export default function FadeOutDestroy(
        gameObject: Phaser.GameObjects.GameObject,
        duration: number,
        destroyMode?: boolean | Fade,
        fade?: Fade,
    ): Fade;
}
