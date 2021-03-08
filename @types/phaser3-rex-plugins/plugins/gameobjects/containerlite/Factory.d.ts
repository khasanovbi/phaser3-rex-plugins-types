declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Factory' {
    import ContainerLite from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ContainerLite';

    export default function Factory(
        x: number,
        y: number,
        width?: number,
        height?: number,
        children?: any,
    ): ContainerLite;
}
