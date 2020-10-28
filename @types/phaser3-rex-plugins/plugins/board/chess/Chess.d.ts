declare module 'phaser3-rex-plugins/plugins/board/chess/Chess' {
    export default class Chess extends Phaser.GameObjects.Polygon {
        constructor(parent: any, uid: any);
        parent: any;
        board: any;
        blocker: boolean;
        boot(): void;
        destroy(): void;
        setBoard(board: any): Chess;
        get tileXYZ(): any;
        setTileZ(tileZ: any): Chess | undefined;
        setBlocker(value: any): Chess;
        setBlockEdge(direction: any, value: any): Chess;
        getBlockEdge(direction: any): any;

        getTileDirection(tileX: any, tileY: any): any;
    }
}
