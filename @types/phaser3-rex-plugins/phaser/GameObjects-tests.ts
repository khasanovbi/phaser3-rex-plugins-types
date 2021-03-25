import InputText from 'phaser3-rex-plugins/plugins/gameobjects/dom/inputtext/InputText';

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

function testInputText() {
    const scene = new Phaser.Scene({});
    const x = 0;
    const y = 1;
    const width = 10;
    const height = 20;
    const text = 'test text';
    const config = {
        x: 0,
        y: 0,
        width: undefined,
        height: undefined,

        type: 'text', // 'text'|'password'|'textarea'|'number'|'color'|...

        // Element properties
        id: undefined,
        text: undefined,
        maxLength: undefined,
        minLength: undefined,
        placeholder: undefined,
        tooltip: undefined,
        readOnly: false,
        spellCheck: false,
        autoComplete: 'off',

        // Style properties
        align: undefined,
        paddingLeft: undefined,
        paddingRight: undefined,
        paddingTop: undefined,
        paddingBottom: undefined,
        fontFamily: undefined,
        fontSize: undefined,
        color: '#ffffff',
        border: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        outline: 'none',

        selectAll: false,
    };
    let inputText = scene.add.rexInputText(x, y, width, height, config);

    scene.add.existing(inputText);

    inputText = scene.add.rexInputText(x, y, config);
    inputText = scene.add.rexInputText(config);

    inputText.text;

    inputText.setText(text);
    inputText.text = text;

    inputText.selectText();
    inputText.scrollToBottom();

    const key = 'key';
    const value = 'value';
    inputText.getStyle(key);
    inputText.setStyle(key, value);

    inputText.setFocus();
    inputText.setBlur();

    inputText.fontColor;

    const color = '#fff';
    inputText.setFontColor(color); // CSS color string

    const length = 123;
    inputText.maxLength;
    inputText.maxLength = length;
    inputText.setMaxLength(length);

    inputText.minLength;
    inputText.minLength = length;
    inputText.setMinLength(length);

    const placeholder = 'placeholder';
    inputText.placeholder;
    inputText.placeholder = placeholder;
    inputText.setPlaceholder(placeholder);

    const tooltip = 'tooltip';
    inputText.tooltip;
    inputText.tooltip = tooltip;
    inputText.setTooltip(tooltip);

    inputText.resize(width, height);

    inputText.selectAll();

    const scope = {};
    inputText.on('textchange', function (inputText: InputText, e: any) {}, scope);
}
