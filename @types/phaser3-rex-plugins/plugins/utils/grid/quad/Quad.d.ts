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
        set width(arg: any);
        get width(): any;
        _width: any;
        _halfWidth: number | undefined;
        set height(arg: any);
        get height(): any;
        _height: any;
        _halfHeight: number | undefined;
        setCellSize(width: any, height: any): Quad;
        set cellWidth(arg: any);
        get cellWidth(): any;
        get cellHeight(): any;
        set cellHieght(arg: any);
    }
}