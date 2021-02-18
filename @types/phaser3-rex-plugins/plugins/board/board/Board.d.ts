declare module 'phaser3-rex-plugins/plugins/board/board/Board' {
    import LogicBoard from 'phaser3-rex-plugins/plugins/board/board/LogicBoard';

    // NOTE: setInteractive assigned to LogicBoard.prototype as side effect
    type Board = LogicBoard;
    export default Board;
}
