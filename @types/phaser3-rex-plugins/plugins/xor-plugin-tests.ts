import XORPlugin from 'phaser3-rex-plugins/plugins/xor-plugin';
import XOR from 'phaser3-rex-plugins/plugins/xor';

function testXORPlugin() {
    const config: Phaser.Types.Core.GameConfig = {
        plugins: {
            global: [
                {
                    key: 'rexXOR',
                    plugin: XORPlugin,
                    start: true,
                },
            ],
        },
    };
    new Phaser.Game(config);

    const src = 'src';
    const pwd = 'pwd';
    const encResult = XOR.Encrypt(src, pwd) as string;
    XOR.Decrypt(encResult, pwd);
}
