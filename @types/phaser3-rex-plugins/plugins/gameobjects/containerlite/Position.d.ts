declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Position' {
    interface PositionType {
        updateChildPosition(child: any): this;
        syncPosition(): this;
        resetChildPositionState(gameObject: any): this;
        setChildPosition(gameObject: any, x: number, y: number): this;
        setChildLocalPosition(gameObject: any, x: number, y: number): this;
    }

    const Position: PositionType;
    export default Position;
}
