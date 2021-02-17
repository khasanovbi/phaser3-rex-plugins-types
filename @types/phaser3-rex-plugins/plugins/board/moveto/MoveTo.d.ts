declare module 'phaser3-rex-plugins/plugins/board/moveto/MoveTo' {
    import MoveToTask from 'phaser3-rex-plugins/plugins/behaviors/moveto/MoveTo';
    import TickTask from 'phaser3-rex-plugins/plugins/utils/ticktask/TickTask';

    export default class MoveTo<T extends Phaser.Events.EventEmitter = any> extends TickTask<T> {
        constructor(gameObject: any, config: any);
        gameObject: any;
        chessData: any;
        scene: any;
        moveToTask: MoveToTask;
        timeScale: any;
        resetFromJSON(o: any): this;
        destinationTileX: any;
        destinationTileY: any;
        destinationDirection: any;
        lastMoveResult: any;
        toJSON(): {
            isRunning: any;
            enable: any;
            timeScale: any;
            speed: any;
            occupiedTest: any;
            blockerTest: any;
            edgeBlockerTest: any;
            moveableTest: any;
            moveableTestScope: any;
            rotateToTarget: any;
            destinationTileX: any;
            destinationTileY: any;
            destinationDirection: any;
            lastMoveResult: any;
            tickingMode: any;
        };
        destroy(): void;
        enable: any;
        setEnable(e: any): this;
        speed: any;
        setSpeed(speed: any): this;
        rotateToTarget: any;
        setRotateToTarget(rotateToTarget: any): this;
        setOccupiedTest(enable: any): this;
        occupiedTest: any;
        setBlockerTest(enable: any): this;
        blockerTest: any;
        setEdgeBlockerTest(enable: any): this;
        edgeBlockerTest: any;
        setMoveableTestCallback(callback: any, scope: any): this;
        moveableTestCallback: any;
        moveableTestScope: any;
        setSneakEnable(enable: any): this;
        sneakMode: any;
        tileZSave: any;
        pause(): this;
        resume(): this;
        stop(): this;
        /** @private */
        private moveAlongLine;
        /** @private */
        private addMoveLine;
        /** @private */
        private moveNextLine;
        /** @private */
        private update;
        start(): this;

        moveToward(direction: any): any;
        moveTo(tileX: any, tileY: any, direction: any): any;
        moveToRandomNeighbor(): any;
        moveCloser(tileX: any, tileY: any): any;
        moveAway(tileX: any, tileY: any, moveAwayMode: any): any;
        canMoveTo(tileX: any, tileY: any, direction: any): boolean;
    }
}
