declare module 'phaser3-rex-plugins/plugins/board/moveto/MoveAway' {
    export type MoveAwayType<T = any> = (tileX: any, tileY?: any, moveAwayMode?: any) => T;
    const MoveAway: MoveAwayType;
    export default MoveAway;
}
