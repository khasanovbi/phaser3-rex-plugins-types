function testContainerLite() {
    const scene = new Phaser.Scene({});
    let container = scene.add.rexContainerLite(0, 1);
    container = scene.add.rexContainerLite(0, 1, 10, 20);
    scene.add.existing(container);

    scene.make.rexContainerLite({
        x: 0,
        y: 0,
        width: 1,
        height: 1,

        angle: 0,
        alpha: 1,
        flipX: true,
        flipY: true,
        scale: {
            x: 1,
            y: 1,
        },
        origin: {x: 0.5, y: 0.5},
    });

    const child = new Phaser.GameObjects.Text(scene, 0, 0, 'text', {});
    container.add(child);

    const children = [child];
    container.addMultiple(children);
    container.add(children);

    container.addLocal(child);
    container.addLocalMultiple(children);

    container.remove(child);
    container.remove(child, true);

    container.clear();
    container.clear(true);

    container.getByName('name');
    container.getByName('name', true);

    container.getRandom();
    container.getRandom(10, 20);

    container.getChildren();
    container.getAllChildren();

    container.contains(child);

    container.children;

    container.setChildPosition(child, 0, 0);

    container.setChildRotation(child, Math.PI);

    container.setChildScale(child, 1, 1);

    container.setChildVisible(child, true);

    container.setChildAlpha(child, 1);

    container.getLocalState(child);

    container.setChildLocalPosition(child, 0, 1);

    container.setChildLocalScale(child, 1, 1);

    container.tweenChild({
        targets: child,
        x: '+=100',
        y: '+=100',
        repeat: -1,
        yoyo: true,
    });

    container.depth;
    container.setDepth(100, true);
    container.depth = 100;
    container.setDepth(100);
    container.swapDepth(container);
    container.incDepth(100);

    const mask = scene.make.graphics({}).createBitmapMask();
    container.setMask(mask);
    container.mask = mask;
    container.clearMask();

    container.setScrollFactor(1, 1);
}
