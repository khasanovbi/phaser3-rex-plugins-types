declare module 'phaser3-rex-plugins/plugins/utils/grid/quad/Quad' {
    export default class Quad {
        constructor(config: any);
        resetFromJSON(o: any): void;
        setType(type: any): Quad;
        mode: any;
        setDirectionMode(mode: any): Quad;
        directions: any;
        setOriginPosition(x: any, y: any): Quad;
        x: any;
        y: any;
        width: any;
        height: any;
        setCellSize(width: any, height: any): Quad;
        cellWidth: any;
        cellHeight: any;
    }
}
