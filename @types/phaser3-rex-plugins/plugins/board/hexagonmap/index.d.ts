declare module 'phaser3-rex-plugins/plugins/board/hexagonmap' {
    import {GetParallelogramMapType} from 'phaser3-rex-plugins/plugins/board/hexagonmap/GetParallelogramMap';
    import {GetTriangleMapType} from 'phaser3-rex-plugins/plugins/board/hexagonmap/GetTriangleMap';
    import {GetHexagonMapType} from 'phaser3-rex-plugins/plugins/board/hexagonmap/GetHexagonMap';

    export type HexagonMapType = {
        hexagon: GetHexagonMapType;
        triangle: GetTriangleMapType;
        parallelogram: GetParallelogramMapType;
    };

    const hexagonMap: HexagonMapType;
    export default hexagonMap;
}
