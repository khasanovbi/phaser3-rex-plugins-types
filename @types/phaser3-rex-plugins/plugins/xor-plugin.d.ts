declare module 'phaser3-rex-plugins/plugins/xor-plugin' {
    import * as Phaser from 'phaser';

    import XOR from 'phaser3-rex-plugins/plugins/xor';

    type XORType = typeof XOR;

    export default class XORPlugin extends Phaser.Plugins.BasePlugin implements XORType {
        Decrypt(data: string, pwd: {toString(): string}): string | null;

        Encrypt(src: string, pwd: {toString(): string}): string | null;
    }
}
