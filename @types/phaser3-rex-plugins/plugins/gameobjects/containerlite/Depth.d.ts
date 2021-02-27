declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Depth' {
    interface DepthType {
        setDepth(value: number, containerOnly?: boolean): this;

        swapDepth(containerB: any): this;

        incDepth(inc: number): this;
    }

    const Depth: DepthType;
    export default Depth;
}
