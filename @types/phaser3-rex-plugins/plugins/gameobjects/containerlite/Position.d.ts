declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Position' {
    interface PositionType {
        updateChildPosition(child: any): this;
        syncPosition(): this;
        resetChildPositionState(gameObject: any): this;
        setChildPosition(gameObject: any, x: any, y: any): this;
        setChildLocalPosition(gameObject: any, x: any, y: any): this;
    }

    const Position: PositionType;
    export default Position;
}
