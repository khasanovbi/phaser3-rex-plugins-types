declare module 'phaser3-rex-plugins/plugins/board/board/tileposition/DirectionBetween' {
    export type DirectionBetweenType = (chessA: any, chessB: any, round?: boolean) => number;
    const DirectionBetween: DirectionBetweenType;
    export default DirectionBetween;
}
