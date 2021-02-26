declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Mask' {
    interface MaskType {
        updateChildMask(child: any): this;

        syncMask(): this;

        setMask(mask: any): this;

        clearMask(destroyMask?: boolean): this;
    }

    const Mask: MaskType;
    export default Mask;
}
