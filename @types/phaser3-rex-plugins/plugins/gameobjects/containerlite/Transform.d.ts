declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Transform' {
    interface TransformType {
        worldToLocal(point: any): any;
        localToWorld(point: any): any;
    }

    const Transform: TransformType;
    export default Transform;
}
