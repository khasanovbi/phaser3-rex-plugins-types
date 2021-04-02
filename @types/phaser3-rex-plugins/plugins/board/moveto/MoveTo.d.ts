declare module 'phaser3-rex-plugins/plugins/board/moveto/MoveTo' {
    import MoveToTask from 'phaser3-rex-plugins/plugins/behaviors/moveto/MoveTo';
    import TickTask from 'phaser3-rex-plugins/plugins/utils/ticktask/TickTask';
    import Methods from 'phaser3-rex-plugins/plugins/board/moveto/Methods';

    type MethodsType = typeof Methods;

    interface MoveToConfig {
        isRunning?: boolean;
        enable?: any;
        timeScale?: any;
        speed?: any;
        occupiedTest?: any;
        blockerTest?: any;
        edgeBlockerTest?: any;
        moveableTest?: any;
        moveableTestScope?: any;
        rotateToTarget?: any;
        destinationTileX?: any;
        destinationTileY?: any;
        destinationDirection?: any;
        lastMoveResult?: any;
    }

    export default class MoveTo<T extends Phaser.Events.EventEmitter = any> extends TickTask<T> implements MethodsType {
        gameObject: any;
        chessData: any;
        scene: any;
        moveToTask: MoveToTask;
        timeScale: any;
        enable: any;
        destinationTileX: any;
        destinationTileY: any;
        destinationDirection: any;
        lastMoveResult: any;
        speed: any;
        rotateToTarget: any;
        occupiedTest: any;
        blockerTest: any;
        edgeBlockerTest: any;
        moveableTestCallback: any;
        moveableTestScope: any;
        sneakMode: any;
        tileZSave: any;

        constructor(gameObject: any, config: MoveToConfig);

        resetFromJSON(o: MoveToConfig): this;

        toJSON(): MoveToConfig & {tickingMode: number};

        destroy(): void;

        setEnable(e?: boolean): this;

        setSpeed(speed: any): this;

        setRotateToTarget(rotateToTarget: any): this;

        setOccupiedTest(enable?: boolean): this;

        setBlockerTest(enable?: boolean): this;

        setEdgeBlockerTest(enable?: boolean): this;

        setMoveableTestCallback(callback?: Function, scope?: any): this;

        setSneakEnable(enable?: boolean): this;

        private moveAlongLine(startX: any, startY: any, endX: any, endY: any): this;

        private addMoveLine(startX: any, startY: any, endX: any, endY: any): this;

        private moveNextLine(): boolean;

        private update(time, delta): this;

        canMoveTo(tileX: any, tileY: any, direction?: any): boolean;

        moveAway(tileX: any, tileY?: any, moveAwayMode?: any): this;

        moveCloser(tileX: any, tileY?: any): this;

        moveTo(tileX: any, tileY?: any, direction?: any): this;

        moveToRandomNeighbor(): this;

        moveToward(direction: any): this;
    }
}
