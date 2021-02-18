declare module 'phaser3-rex-plugins/plugins/board/board/boarddata/BoardData' {
    type XYZ = {x: number; y: number; z?: number};

    export default class BoardData {
        private _xMax?: number;
        private _xMin?: number;
        private _yMax?: number;
        private _yMin?: number;
        chessCount: number;
        XYZToUID: Record<number, Record<number, Record<number, any>>>;
        UIDToXYZ: Record<any, XYZ>;

        constructor();

        shutdown(): this;

        destroy(): this;

        clear(): this;

        clearBounds(): this;

        addUID(uid: any, x: number, y: number, z?: number): this;

        getUID(x: number, y: number, z?: number): any;

        removeUID(x: number, y: number, z?: number): this;

        exists(uid: any): boolean;

        contains(x: number, y: number, z?: number): boolean;

        getXYZ(uid: any): XYZ | undefined;

        get xMax(): number;

        get xMin(): number;

        get yMax(): number;

        get yMin(): number;
    }
}
