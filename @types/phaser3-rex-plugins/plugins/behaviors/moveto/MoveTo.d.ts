declare module 'phaser3-rex-plugins/plugins/behaviors/moveto/MoveTo' {
    import TickTask from 'phaser3-rex-plugins/plugins/utils/ticktask/TickTask';

    export default class MoveTo<T extends Phaser.Events.EventEmitter = any> extends TickTask<T> {
        constructor(gameObject: any, config: any);
        gameObject: any;
        scene: any;
        resetFromJSON(o: any): this;
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
        setEnable(e: any): this;
        enable: any;
        setSpeed(speed: any): this;
        speed: any;
        setRotateToTarget(rotateToTarget: any): this;
        rotateToTarget: any;
        moveTo(x: any, y: any): this;
        update(time: any, delta: any): this;
        start(): this;
        pause(): this;
        resume(): this;
        stop(): this;
    }
}
