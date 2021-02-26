declare module 'phaser3-rex-plugins/plugins/board/miniboard/mainboard/MainBoardReference' {
    export default class MainBoardReference {
        miniBoard: any;
        mainBoard: any;
        tileX: any;
        tileY: any;

        constructor(miniBoard: any);

        set(mainBoard: any, tileX: any, tileY: any): void;
    }
}
