declare module 'phaser3-rex-plugins/plugins/board/hexagonmap' {
    import GetParallelogramMap from 'phaser3-rex-plugins/plugins/board/hexagonmap/GetParallelogramMap';
    import GetTriangleMap from 'phaser3-rex-plugins/plugins/board/hexagonmap/GetTriangleMap';
    import GetHexagonMap from 'phaser3-rex-plugins/plugins/board/hexagonmap/GetHexagonMap';

    type HexagonMapType = {
        hexagon: typeof GetHexagonMap;
        triangle: typeof GetTriangleMap;
        parallelogram: typeof GetParallelogramMap;
    };

    const HexagonMap: HexagonMapType;
    export default HexagonMap;
}
