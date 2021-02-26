declare module 'phaser3-rex-plugins/plugins/behaviors/moveto/MoveTo' {
    import TickTask, {TickTaskConfig} from 'phaser3-rex-plugins/plugins/utils/ticktask/TickTask';

    export interface MoveToConfig extends TickTaskConfig {
        isRunning?: boolean;
        enable?: boolean;
        timeScale?: number;
        speed?: number;
        rotateToTarget?: boolean;
        targetX?: number;
        targetY?: number;
    }

    export default class MoveTo<T extends Phaser.Events.EventEmitter = any> extends TickTask<T> {
        gameObject: any;
        scene: any;
        timeScale: any;
        targetX: any;
        targetY: any;
        enable: any;
        speed: any;
        rotateToTarget: any;

        constructor(gameObject: any, config: MoveToConfig);

        resetFromJSON(config: MoveToConfig): this;

        toJSON(): MoveToConfig;

        destroy(): void;

        setEnable(e?: boolean): this;

        setSpeed(speed: number): this;

        setRotateToTarget(rotateToTarget: boolean): this;

        moveTo(x: number, y: number): this;
        moveTo(config: {x: number; y: number}): this;

        update(time: number, delta: number): this;
    }
}
