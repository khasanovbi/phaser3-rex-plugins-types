declare module 'phaser3-rex-plugins/plugins/board/miniboard/Methods' {
    import {AddChessType} from 'phaser3-rex-plugins/plugins/board/miniboard/chess/AddChess';
    import {RemoveAllChessType} from 'phaser3-rex-plugins/plugins/board/miniboard/chess/RemoveAllChess';
    import {RemoveChessType} from 'phaser3-rex-plugins/plugins/board/miniboard/chess/RemoveChess';
    import {PullOutFromMainBoardType} from 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/PullOutFromMainBoard';
    import CanPutOnMainBoard from 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/CanPutOnMainBoard';
    import {PutOnMainBoardType} from 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/PutOnMainBoard';
    import {SetMainBoardType} from 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/SetMainboard';
    import IsOverlapping from 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/IsOverlapping';
    import {AlignToMainBoardType} from 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/AlignToMainBoard';
    import {SetInteractiveType} from 'phaser3-rex-plugins/plugins/board/miniboard/input/SetInteractive';
    import {SetDraggableType} from 'phaser3-rex-plugins/plugins/board/miniboard/input/SetDraggable';
    import {DragEndType} from 'phaser3-rex-plugins/plugins/board/miniboard/input/DragEnd';
    import CanMirror from 'phaser3-rex-plugins/plugins/board/miniboard/transform/CanMirror';
    import {MirrorType} from 'phaser3-rex-plugins/plugins/board/miniboard/transform/Mirror';
    import CanRotate from 'phaser3-rex-plugins/plugins/board/miniboard/transform/CanRotate';
    import {RotateType} from 'phaser3-rex-plugins/plugins/board/miniboard/transform/Rotate';
    import CanRotateTo from 'phaser3-rex-plugins/plugins/board/miniboard/transform/CanRotateTo';
    import RotateTo from 'phaser3-rex-plugins/plugins/board/miniboard/transform/RotateTo';
    import {SetOriginType} from 'phaser3-rex-plugins/plugins/board/miniboard/transform/SetOrigin';
    import {PutBackType} from 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/PutBack';

    interface MethodsType {
        addChess: AddChessType<this>;
        removeChess: RemoveChessType<this>;
        removeAllChess: RemoveAllChessType<this>;
        pullOutFromMainBoard: PullOutFromMainBoardType<this>;
        canPutOnMainBoard: typeof CanPutOnMainBoard;
        putOnMainBoard: PutOnMainBoardType<this>;
        putBack: PutBackType<this>;
        isOverlapping: typeof IsOverlapping;
        alignToMainBoard: AlignToMainBoardType<this>;
        setInteractive: SetInteractiveType<this>;
        setDraggable: SetDraggableType<this>;
        dragEnd: DragEndType<this>;
        setMainBoard: SetMainBoardType<this>;
        canMirror: typeof CanMirror;
        mirror: MirrorType<this>;
        canRotate: typeof CanRotate;
        rotate: RotateType<this>;
        canRotateTo: typeof CanRotateTo;
        rotateTo: typeof RotateTo;
        setOrigin: SetOriginType<this>;
    }

    const Methods: MethodsType;
    export default Methods;
}
