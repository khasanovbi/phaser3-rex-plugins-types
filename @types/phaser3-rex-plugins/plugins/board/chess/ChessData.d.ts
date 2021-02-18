declare module 'phaser3-rex-plugins/plugins/board/chess/ChessData' {
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';
    import {GetTileDirectionType} from 'phaser3-rex-plugins/plugins/board/chess/GetTileDirection';

    interface GetTileDirection {
        getTileDirection: GetTileDirectionType;
    }

    export default class Chess implements GetTileDirection {
        parent: any;
        board: any;
        blocker: any;

        constructor(parent: any, uid: any);

        boot(): void;

        destroy(): void;

        setBoard(board: Board): this;

        get tileXYZ(): any;

        setTileZ(tileZ: any): this | undefined;

        setBlocker(value?: any): this;

        setBlockEdge(direction: any, value?: any): this;

        getBlockEdge(direction: any): any;

        getTileDirection(tileX: number, tileY: number): number;
    }
}
