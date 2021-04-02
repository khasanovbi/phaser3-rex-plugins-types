declare module 'phaser3-rex-plugins/plugins/xor' {
    import Decrypt from 'phaser3-rex-plugins/plugins/string/xor/Decrypt';
    import Encrypt from 'phaser3-rex-plugins/plugins/string/xor/Encrypt';

    interface xorType {
        Encrypt: typeof Encrypt;
        Decrypt: typeof Decrypt;
    }

    const XOR: xorType;
    export default XOR;
}
