declare module 'phaser3-rex-plugins/plugins/board/board/worldposition/IsOverlappingPoint' {
    export type IsOverlappingPointType = (worldX: number, worldY: number, tileZ?: number) => boolean;
    const IsOverlappingPoint: IsOverlappingPointType;
    export default IsOverlappingPoint;
}
