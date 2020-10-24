declare module 'phaser3-rex-plugins/plugins/board/board/boarddata/BoardData' {
    export default class BoardData {
        XYZToUID: {};
        UIDToXYZ: {};
        shutdown(): BoardData;
        destroy(): BoardData;
        clear(): BoardData;
        chessCount: number | undefined;
        clearBounds(): BoardData;
        _xMax: any;
        _xMin: any;
        _yMax: any;
        _yMin: any;
        addUID(uid: any, x: any, y: any, z: any): BoardData;
        getUID(x: any, y: any, z: any): any;
        removeUID(x: any, y: any, z: any): BoardData;
        exists(uid: any): boolean;
        contains(x: any, y: any, z: any): boolean;
        getXYZ(uid: any): any;
        get xMax(): any;
        get xMin(): any;
        get yMax(): any;
        get yMin(): any;
    }
}