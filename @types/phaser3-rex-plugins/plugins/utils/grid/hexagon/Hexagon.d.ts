declare module 'phaser3-rex-plugins/plugins/utils/grid/hexagon/Hexagon' {
    export default class Hexagon {
        constructor(config: any);
        resetFromJSON(o: any): void;
        size: any;
        setType(staggeraxis: any, staggerindex: any): Hexagon;
        staggeraxis: any;
        staggerindex: any;
        mode: number | undefined;
        setDirectionMode(): Hexagon;
        directions: number | undefined;
        setOriginPosition(x: any, y: any): Hexagon;
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
        setCellSize(width: any, height: any): Hexagon;
        set cellWidth(arg: any);
        get cellWidth(): any;
        get cellHeight(): any;
        set cellHieght(arg: any);
    }
}