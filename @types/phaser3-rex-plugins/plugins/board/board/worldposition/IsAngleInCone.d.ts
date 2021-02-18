declare module 'phaser3-rex-plugins/plugins/board/board/worldposition/IsAngleInCone' {
    export type IsAngleInConeType = (chessA: any, chessB: any, face: number, cone: number) => boolean;
    const IsAngleInCone: IsAngleInConeType;
    export default IsAngleInCone;
}
