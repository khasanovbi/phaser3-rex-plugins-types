declare module 'phaser3-rex-plugins/plugins/board/grid/hexagon/Hexagon' {
    import Hexagon from "phaser3-rex-plugins/plugins/utils/grid/hexagon/Hexagon";

    export default class HexagonGrid extends Hexagon {
        constructor(config: any);
        sides: number;
        get allDirections(): number[];
        get halfDirections(): number[];
        setType(staggeraxis: any, staggerindex: any): HexagonGrid;
        setDirectionMode(): HexagonGrid;
        setOriginPosition(x: any, y: any): HexagonGrid;
        setCellSize(width: any, height: any): HexagonGrid;

        getGridPoints(tileX: any, tileY: any, points: any): any;
    }
}