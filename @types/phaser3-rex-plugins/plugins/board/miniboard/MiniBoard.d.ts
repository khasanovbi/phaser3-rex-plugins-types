declare module 'phaser3-rex-plugins/plugins/board/miniboard/MiniBoard' {
    import Container from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ContainerLite';
    import MainBoardReference from 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/MainBoardReference';
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';
    import Methods from 'phaser3-rex-plugins/plugins/board/miniboard/Methods';

    type MethodsType = typeof Methods;

    export interface MiniBoardConfig {
        grid?: any;
        face?: any;
        draggable?: any;
        lastTransferResult?: any;
    }

    export default class MiniBoard extends Container implements MethodsType {
        board: Board;
        mainBoardRef: MainBoardReference;
        lastMainBoardRef: MainBoardReference;
        putTestCallback: Function;
        putTestCallbackScpe: any;
        scene: any;
        face: any;

        constructor(scene: Phaser.Scene, x: number, y: number, config: MiniBoardConfig);

        resetFromJSON(o: MiniBoardConfig): this;

        lastTransferResult: any;

        boot(): void;

        shutdown(): this;

        setFace(direction: any): this;

        get mainBoard(): any;

        get tileX(): any;

        get tileY(): any;

        get grid(): any;

        get tileXYZMap(): {};

        setPutTestCallback(callback: any, scope: any): this;

        addChess(gameObject: any, tileX: any, tileY: any, tileZ: any): this;

        alignToMainBoard(mainBoard: any, tileX: any, tileY: any): this;

        canMirror(mode: any): boolean;

        canPutOnMainBoard(mainBoard: any, tileX: any, tileY: any, chessTileXYMap: any): boolean;

        canRotate(direction: any): boolean;

        canRotateTo(direction: any): boolean;

        dragEnd(pointer: any): this;

        isOverlapping(mainBoard: any, tileZ: any): boolean;

        mirror(mode: any): this;

        pullOutFromMainBoard(): this;

        putBack(): this;

        putOnMainBoard(mainBoard: any, tileX: any, tileY: any, align: any): this;

        removeAllChess(destroy: any): this;

        removeChess(gameObject: any, tileX: any, tileY: any, tileZ: any, destroy: any): this;

        rotate(direction: any): this;

        rotateTo(direction: any): any;

        setDraggable(enable?: boolean): this;

        setInteractive(enable?: boolean): this;

        setMainBoard(mainBoard: any, tileX: any, tileY: any): this;

        setOrigin(originX?: any, originY?: any): this;
    }
}
