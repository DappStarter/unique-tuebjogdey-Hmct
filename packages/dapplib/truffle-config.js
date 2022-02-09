require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan riot stereo proof heavy kite suit sleep'; 
let testAccounts = [
"0x2842d76bf65cd7cf936754373bdd16fcb11f6950858cee4e0dace563c7850349",
"0x01e20377aa316d1850093ec1484dfc730f8fe502c8f69c27cdbfb0ad43976685",
"0xcd874bc49783307fffc593fe2edb4bab22c7818caeef2276118cb445bd7ccde4",
"0xdc9fb3b40b0542bdd1cb451800960a97662b32755a086646f4057b070509df44",
"0xbba837a2659cc09bc30bb00fc921ae1e83c381074171824880103f419146313b",
"0x79fbf29b23576396bace073926849e8d24e42a28112cc6c422a353cf31749b29",
"0x950f1dbd93e83b32263cd1f294a72ca902c4791712ee3999d1a1914980e10ab0",
"0xc01bb9771a8e50bcc7f00597fd3bb0c4f6c37ebe995cd313ce4abad10a6cbfc0",
"0x0e9105580782b03039d46e5c365ad9fe9a61743f12926a00e0f44e8f877df778",
"0x7623754f7d6c6492982aa1eb2bfaac0fcfd9895b99dd57c30bff5a0a67e0c95d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


