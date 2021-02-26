declare module 'phaser3-rex-plugins/plugins/board/moveto/Methods' {
    import CanMoveToTile from 'phaser3-rex-plugins/plugins/board/moveto/CanMoveToTile';
    import {MoveToTileType} from 'phaser3-rex-plugins/plugins/board/moveto/MoveToTile';
    import {MoveTowardType} from 'phaser3-rex-plugins/plugins/board/moveto/MoveToward';
    import {MoveToRandomNeighborType} from 'phaser3-rex-plugins/plugins/board/moveto/MoveToRandomNeighbor';
    import {MoveCloserType} from 'phaser3-rex-plugins/plugins/board/moveto/MoveCloser';
    import {MoveAwayType} from 'phaser3-rex-plugins/plugins/board/moveto/MoveAway';

    interface MethodsType {
        canMoveTo: typeof CanMoveToTile;

        moveTo: MoveToTileType<this>;

        moveToward: MoveTowardType<this>;

        moveToRandomNeighbor: MoveToRandomNeighborType<this>;

        moveAway: MoveAwayType<this>;

        moveCloser: MoveCloserType<this>;
    }

    const Methods: MethodsType;
    export default Methods;
}
