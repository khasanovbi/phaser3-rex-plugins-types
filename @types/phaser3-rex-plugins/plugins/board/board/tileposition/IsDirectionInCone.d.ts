declare module 'phaser3-rex-plugins/plugins/board/board/tileposition/IsDirectionInCone' {
    export type IsDirectionInConeType = (chessA: any, chessB: any, face: number, cone: number) => boolean;
    const IsDirectionInCone: IsDirectionInConeType;
    export default IsDirectionInCone;
}
