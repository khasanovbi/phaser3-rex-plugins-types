declare module 'phaser3-rex-plugins/plugins/board/grid/quad/Quad' {
    export default class QuadGrid extends Quad {
        constructor(config: any);
        sides: number;
        get allDirections(): number[];
        get halfDirections(): number[];
        setType(type: any): QuadGrid;
        setDirectionMode(mode: any): QuadGrid;
        setOriginPosition(x: any, y: any): QuadGrid;
        setCellSize(width: any, height: any): QuadGrid;

        getGridPoints(tileX: any, tileY: any, points: any): any;
    }

    import Quad from 'phaser3-rex-plugins/plugins/utils/grid/quad/Quad';
}
