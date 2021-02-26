declare module 'phaser3-rex-plugins/plugins/utils/grid/quad/Quad' {
    import GetWorldXY from 'phaser3-rex-plugins/plugins/utils/grid/quad/GetWorldXY';
    import GetWorldX from 'phaser3-rex-plugins/plugins/utils/grid/quad/GetWorldX';
    import GetWorldY from 'phaser3-rex-plugins/plugins/utils/grid/quad/GetWorldY';
    import GetTileXY from 'phaser3-rex-plugins/plugins/utils/grid/quad/GetTileXY';
    import GetTileX from 'phaser3-rex-plugins/plugins/utils/grid/quad/GetTileX';
    import GetTileY from 'phaser3-rex-plugins/plugins/utils/grid/quad/GetTileY';

    interface QuadConfig {
        type?: any;
        dir?: any;
        x?: any;
        y?: any;
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

    export default class Quad implements MethodsType {
        mode: any;
        directions: any;
        x: any;
        y: any;

        constructor(config: QuadConfig);

        resetFromJSON(o: QuadConfig): void;

        setType(type: any): this;

        setDirectionMode(mode: any): this;

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

        getTileXY(worldX: any, worldY: any, out?: any): any;

        getTileY(worldX: any, worldY: any): number;

        getWorldX(tileX: any, tileY: any): number;

        getWorldXY(tileX: any, tileY: any, out?: any): any;

        getWorldY(tileX: any, tileY: any): number;
    }
}
