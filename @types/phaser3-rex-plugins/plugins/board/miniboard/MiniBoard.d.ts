declare module 'phaser3-rex-plugins/plugins/board/miniboard/MiniBoard' {
    import Container from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ContainerLite';
    import MainBoardReference from 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/MainBoardReference';
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';

    export default class MiniBoard extends Container {
        constructor(scene: any, x: any, y: any, config: any);
        board: Board;
        mainBoardRef: MainBoardReference;
        lastMainBoardRef: MainBoardReference;
        putTestCallback: any;
        putTestCallbackScpe: any;
        resetFromJSON(o: any): MiniBoard;
        lastTransferResult: any;
        boot(): void;
        shutdown(): MiniBoard;
        scene: any;
        destroy(): MiniBoard;
        setFace(direction: any): MiniBoard;
        face: any;
        get mainBoard(): any;
        get tileX(): any;
        get tileY(): any;
        get grid(): any;
        get tileXYZMap(): {};
        setPutTestCallback(callback: any, scope: any): MiniBoard;
        resize(width: any, height: any): MiniBoard;
        add(gameObjects: any): MiniBoard;
        remove(gameObjects: any, destroyChild: any): MiniBoard;
        clear(destroyChild: any): MiniBoard;

        addChess(gameObject: any, tileX: any, tileY: any, tileZ: any): any;
        removeChess(gameObject: any, tileX: any, tileY: any, tileZ: any, destroy: any): any;
        removeAllChess(destroy: any): any;
        pullOutFromMainBoard(): any;
        canPutOnMainBoard(mainBoard: any, tileX: any, tileY: any, chessTileXYMap: any): boolean;
        putOnMainBoard(mainBoard: any, tileX: any, tileY: any, align: any): any;
        putBack(): any;
        isOverlapping(mainBoard: any, tileZ: any): boolean;
        alignToMainBoard(mainBoard: any, tileX: any, tileY: any): any;
        setInteractive(enable: any): any;
        setDraggable(enable: any): any;
        dragEnd(pointer: any): any;
        setMainBoard(mainBoard: any, tileX: any, tileY: any): any;
        canMirror(mode: any): any;
        mirror(mode: any): any;
        canRotate(direction: any): any;
        rotate(direction: any): any;
        canRotateTo(direction: any): any;
        rotateTo(direction: any): any;
        setOrigin(originX: any, originY: any): any;
    }
}
