declare module 'phaser3-rex-plugins/plugins/board/match/MatchAtDir' {
    export default function MatchAtDir(
        pattern: any,
        startTileX: any,
        startTileY: any,
        direction: any,
    ):
        | false
        | {
              tileXY: any[];
              direction: any;
              pattern: any;
          };
}
