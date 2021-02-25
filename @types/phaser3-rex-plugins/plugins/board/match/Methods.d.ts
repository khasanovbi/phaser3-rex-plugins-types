declare module 'phaser3-rex-plugins/plugins/board/match/Methods' {
    import MatchAll from 'phaser3-rex-plugins/plugins/board/match/MatchAll';
    import MatchAtDir from 'phaser3-rex-plugins/plugins/board/match/MatchAtDir';
    import Group from 'phaser3-rex-plugins/plugins/board/match/Group';

    interface MethodsType {
        match: typeof MatchAll;
        matchAtDir: typeof MatchAtDir;
        group: typeof Group;
    }
    const Methods: MethodsType;

    export default Methods;
}
