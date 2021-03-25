declare module 'phaser3-rex-plugins/plugins/gameobjects/dom/inputtext/Factory' {
    import InputText from 'phaser3-rex-plugins/plugins/gameobjects/dom/inputtext/InputText';

    function Factory(x: number, y: number, width: number, height: number, config?: any): InputText;
    function Factory(x: number, y: number, config?: any): InputText;
    function Factory(config?: any): InputText;

    export default Factory;
}
