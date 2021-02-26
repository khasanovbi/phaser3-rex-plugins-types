declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Methods' {
    import Parent from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Parent';
    import AddChild from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/AddChild';
    import RemoveChild from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/RemoveChild';
    import ChildState from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ChildState';
    import Transform from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Transform';
    import Position from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Position';
    import Rotation from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Rotation';
    import Scale from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Scale';
    import Visible from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Visible';
    import Alpha from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Alpha';
    import Active from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Active';
    import ScrollFactor from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/ScrollFactor';
    import Mask from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Mask';
    import Depth from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Depth';
    import Children from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Children';
    import Tween from 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Tween';

    type MethodsType = typeof Parent &
        typeof AddChild &
        typeof RemoveChild &
        typeof ChildState &
        typeof Transform &
        typeof Position &
        typeof Rotation &
        typeof Scale &
        typeof Visible &
        typeof Alpha &
        typeof Active &
        typeof ScrollFactor &
        typeof Mask &
        typeof Depth &
        typeof Children &
        typeof Tween;

    const Methods: MethodsType;
    export default Methods;
}
