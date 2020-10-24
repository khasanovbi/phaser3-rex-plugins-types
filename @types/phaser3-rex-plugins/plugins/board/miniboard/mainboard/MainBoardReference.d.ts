declare module 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/MainBoardReference' {
    export default class MainBoardReference {
        constructor(miniBoard: any);
        miniBoard: any;
        set(mainBoard: any, tileX: any, tileY: any): void;
        mainBoard: any;
        tileX: any;
        tileY: any;
    }
}