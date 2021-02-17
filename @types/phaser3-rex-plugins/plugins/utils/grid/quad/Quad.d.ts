declare module 'phaser3-rex-plugins/plugins/utils/grid/quad/Quad' {
    export default class Quad {
        constructor(config: any);
        resetFromJSON(o: any): void;
        setType(type: any): this;
        mode: any;
        setDirectionMode(mode: any): this;
        directions: any;
        setOriginPosition(x: any, y: any): this;
        x: any;
        y: any;
        width: any;
        height: any;
        setCellSize(width: any, height: any): this;
        cellWidth: any;
        cellHeight: any;
    }
}
