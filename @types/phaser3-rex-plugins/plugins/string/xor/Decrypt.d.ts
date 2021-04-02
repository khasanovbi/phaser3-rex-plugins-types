declare module 'phaser3-rex-plugins/plugins/string/xor/Decrypt' {
    export default function (data: string, pwd: {toString(): string}): string | null;
}
