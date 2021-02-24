declare module 'phaser3-rex-plugins/plugins/board/fieldofview/Methods' {
    import IsInCone from 'phaser3-rex-plugins/plugins/board/fieldofview/IsInCone';
    import IsInLOS from 'phaser3-rex-plugins/plugins/board/fieldofview/IsInLOS';
    import IsPathVisible from 'phaser3-rex-plugins/plugins/board/fieldofview/IsPathVisible';
    import LOS from 'phaser3-rex-plugins/plugins/board/fieldofview/LOS';
    import PreTest from 'phaser3-rex-plugins/plugins/board/fieldofview/PreTest';
    import FindFOV from 'phaser3-rex-plugins/plugins/board/fieldofview/FindFOV';
    import GetCost from 'phaser3-rex-plugins/plugins/board/fieldofview/GetCost';

    interface MethodsType {
        preTest: typeof PreTest;

        getCost: typeof GetCost;

        isInCone: typeof IsInCone;

        isPathVisible: typeof IsPathVisible;

        isInLOS: typeof IsInLOS;

        LOS: typeof LOS;

        findFOV: typeof FindFOV;
    }

    const Methods: MethodsType;
    export default Methods;
}
