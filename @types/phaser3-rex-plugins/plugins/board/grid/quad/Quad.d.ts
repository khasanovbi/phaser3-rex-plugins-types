declare module 'phaser3-rex-plugins/plugins/board/grid/quad/Quad' {
    export default class QuadGrid extends Quad {
        constructor(config: any);
        sides: number;
        get allDirections(): number[];
        get halfDirections(): number[];
        setType(type: any): this;
        setDirectionMode(mode: any): this;
        setOriginPosition(x: any, y: any): this;
        setCellSize(width: any, height: any): this;

        getGridPoints(tileX: any, tileY: any, points: any): any;
    }

    import Quad from 'phaser3-rex-plugins/plugins/utils/grid/quad/Quad';
}
