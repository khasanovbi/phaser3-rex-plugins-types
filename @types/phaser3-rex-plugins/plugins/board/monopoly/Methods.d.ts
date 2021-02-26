declare module 'phaser3-rex-plugins/plugins/board/monopoly/Methods' {
    import GetCost from 'phaser3-rex-plugins/plugins/board/monopoly/GetCost';
    import GetNextTile from 'phaser3-rex-plugins/plugins/board/monopoly/GetNextTile';
    import GetPath from 'phaser3-rex-plugins/plugins/board/monopoly/GetPath';

    interface MethodsType {
        getPath: typeof GetPath;

        getNextTile: typeof GetNextTile;

        getCost: typeof GetCost;
    }

    const Methods: MethodsType;
    export default Methods;
}
