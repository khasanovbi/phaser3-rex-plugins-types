declare module 'phaser3-rex-plugins/plugins/string/xor/Encrypt' {
    export default function (src: string, pwd: {toString(): string}): string | null;
}
