declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Rotation' {
    interface RotationType {
        updateChildRotation(child: any): this;
        syncRotation(): this;
        resetChildRotationState(gameObject: any): this;
        setChildRotation(gameObject: any, rotation: number): this;
        setChildLocalRotation(gameObject: any, rotation: number): this;
    }

    const Rotation: RotationType;
    export default Rotation;
}
