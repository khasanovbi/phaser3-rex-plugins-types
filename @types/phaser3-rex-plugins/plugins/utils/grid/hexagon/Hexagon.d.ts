declare module 'phaser3-rex-plugins/plugins/utils/grid/hexagon/Hexagon' {
    import GetWorldXY from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetWorldXY';
    import GetWorldX from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetWorldX';
    import GetWorldY from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetWorldY';
    import GetTileXY from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetTileXY';
    import GetTileX from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetTileX';
    import GetTileY from 'phaser3-rex-plugins/plugins/utils/grid/hexagon/GetTileY';

    type StaggerAxis = 'y' | 0 | 'x' | 1;
    type StaggerIndex = 'even' | 0 | 'odd' | 1;

    export interface HexagonConfig {
        staggeraxis?: StaggerAxis;
        staggerindex?: StaggerIndex;
        x?: number;
        y?: number;
        size?: any;
        cellWidth?: number;
        cellHeight?: number;
    }

    interface MethodsType {
        getWorldXY: typeof GetWorldXY;
        getWorldX: typeof GetWorldX;
        getWorldY: typeof GetWorldY;
        getTileXY: typeof GetTileXY;
        getTileX: typeof GetTileX;
        getTileY: typeof GetTileY;
    }

    export default class Hexagon implements MethodsType {
        staggeraxis: StaggerAxis;
        staggerindex: StaggerIndex;
        mode?: number;
        size: any;
        directions?: number;
        x: any;
        y: any;

        constructor(config: HexagonConfig);

        resetFromJSON(o: HexagonConfig): void;

        setType(staggeraxis: StaggerAxis, staggerindex: StaggerIndex): this;

        setDirectionMode(): this;

        setOriginPosition(x: any, y: any): this;

        get width(): any;
        set width(value: any);

        get height(): any;
        set height(value: any);

        setCellSize(width: any, height: any): this;

        get cellWidth(): any;
        set cellWidth(value: any);

        get cellHeight(): any;
        set cellHeight(value: any);

        getTileX(worldX: any, worldY: any): number;

        getTileXY(worldX: any, worldY: any, out: any): any;

        getTileY(worldX: any, worldY: any): number;

        getWorldX(tileX: any, tileY: any): number;

        getWorldXY(tileX: any, tileY: any, out?: any): any;

        getWorldY(tileX: any, tileY: any): number;
    }
}
