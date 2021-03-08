declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Creator' {
    import ContainerLite from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ContainerLite';

    export default function Creator(
        config?: Phaser.Types.GameObjects.GameObjectConfig & {
            width?: number;
            height?: number;
            children?: any;
        },
    ): ContainerLite;
}
