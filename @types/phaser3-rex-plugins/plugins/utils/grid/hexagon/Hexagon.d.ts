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
        width: any;
        height: any;
        setCellSize(width: any, height: any): Hexagon;
        cellWidth: any;
        cellHeight: any;
    }
}
