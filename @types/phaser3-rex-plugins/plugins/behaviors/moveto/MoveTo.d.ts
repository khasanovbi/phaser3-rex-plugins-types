declare module 'phaser3-rex-plugins/plugins/behaviors/moveto/MoveTo' {
    export default class MoveTo extends TickTask {
        constructor(gameObject: any, config: any);
        gameObject: any;
        scene: any;
        resetFromJSON(o: any): MoveTo;
        timeScale: any;
        targetX: any;
        targetY: any;
        toJSON(): {
            isRunning: any;
            enable: any;
            timeScale: any;
            speed: any;
            rotateToTarget: any;
            targetX: any;
            targetY: any;
            tickingMode: any;
        };
        destroy(): void;
        setEnable(e: any): MoveTo;
        enable: any;
        setSpeed(speed: any): MoveTo;
        speed: any;
        setRotateToTarget(rotateToTarget: any): MoveTo;
        rotateToTarget: any;
        moveTo(x: any, y: any): MoveTo;
        update(time: any, delta: any): MoveTo;
        start(): MoveTo;
        pause(): MoveTo;
        resume(): MoveTo;
        stop(): MoveTo;
    }

    import TickTask from "phaser3-rex-plugins/plugins/utils/ticktask/TickTask";

}