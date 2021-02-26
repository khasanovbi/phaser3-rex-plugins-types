declare module 'phaser3-rex-plugins/plugins/board/pathfinder/Methods' {
    import {AStarSearchType} from 'phaser3-rex-plugins/plugins/board/pathfinder/astartsearch/AStarSearch';
    import GetCost from 'phaser3-rex-plugins/plugins/board/pathfinder/GetCost';
    import FindArea from 'phaser3-rex-plugins/plugins/board/pathfinder/FindArea';
    import GetPath from 'phaser3-rex-plugins/plugins/board/pathfinder/GetPath';
    import FindPath from 'phaser3-rex-plugins/plugins/board/pathfinder/FindPath';
    import TileXYToCost from 'phaser3-rex-plugins/plugins/board/pathfinder/TileXYToCost';

    interface MethodsType {
        aStarSearch: AStarSearchType<this>;

        getCost: typeof GetCost;

        findArea: typeof FindArea;

        getPath: typeof GetPath;

        findPath: typeof FindPath;

        tileXYToCost: typeof TileXYToCost;
    }

    const Methods: MethodsType;
    export default Methods;
}
