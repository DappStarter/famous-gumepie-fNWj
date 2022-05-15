require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy recipe stick protect idea enroll equal gate'; 
let testAccounts = [
"0x8da96a1bbe4167a72580ef97125bfd84c431c714f5957eebf50bd69d2ab1f99b",
"0x1b875063287e46b1a41344c82a79b72e137c7b8c40c648685c9a3c18cf7ee875",
"0x479dafd74977ca9056bd095d8fe2102aa8cc464ab2fb67a2eb6d579241396061",
"0xdf205205d9c33d03f165d8507954b416f520b9a89b680208e9997bc080a62059",
"0x99881ca34af34eccfe248a563b3797c96f8ec03b79693a5e9013485d71229933",
"0x80334176b1a379eacfed45f80413a2ee45c1f54eced67d2063fd288fff080962",
"0xd0624d2c87521576d91c8cdc229b154ed26f106b9b1b1940cd63f75baa00bd71",
"0x334f32f5aa2ab67b624356598fe4321f50e962eab67cbd5f85bef776da3438f2",
"0xca2e1e136fc6d991608933f507917e513063b3bf909d66b3c0f093a367ca05c7",
"0x6f497c4f680a00fdbcc937d99c4ff1c1c33a0757de6cf58ed6701b644adb4c95"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

