declare module 'phaser3-rex-plugins/plugins/board/moveto/MoveTo' {
    export default class MoveTo extends TickTask {
        constructor(gameObject: any, config: any);
        gameObject: any;
        chessData: any;
        scene: any;
        moveToTask: MoveToTask;
        timeScale: any;
        resetFromJSON(o: any): MoveTo;
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
        setEnable(e: any): MoveTo;
        speed: any;
        setSpeed(speed: any): MoveTo;
        rotateToTarget: any;
        setRotateToTarget(rotateToTarget: any): MoveTo;
        setOccupiedTest(enable: any): MoveTo;
        occupiedTest: any;
        setBlockerTest(enable: any): MoveTo;
        blockerTest: any;
        setEdgeBlockerTest(enable: any): MoveTo;
        edgeBlockerTest: any;
        setMoveableTestCallback(callback: any, scope: any): MoveTo;
        moveableTestCallback: any;
        moveableTestScope: any;
        setSneakEnable(enable: any): MoveTo;
        sneakMode: any;
        tileZSave: any;
        pause(): MoveTo;
        resume(): MoveTo;
        stop(): MoveTo;
        /** @private */
        private moveAlongLine;
        /** @private */
        private addMoveLine;
        /** @private */
        private moveNextLine;
        /** @private */
        private update;
        start(): MoveTo;

        moveToward(direction: any): any;
        moveTo(tileX: any, tileY: any, direction: any): any;
        moveToRandomNeighbor(): any;
        moveCloser(tileX: any, tileY: any): any;
        moveAway(tileX: any, tileY: any, moveAwayMode: any): any;
        canMoveTo(tileX: any, tileY: any, direction: any): boolean;
    }

    import TickTask from 'phaser3-rex-plugins/plugins/utils/ticktask/TickTask';
    import MoveToTask from 'phaser3-rex-plugins/plugins/behaviors/moveto/MoveTo';
}
