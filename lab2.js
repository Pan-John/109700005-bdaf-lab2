const prompt = require("prompt-sync")({sigint:true})
const bip39 = require('bip39')
const { hdkey } = require('ethereumjs-wallet')

let prefix = prompt("please enter prefix: ")

let address = '0x00'
let count = 0
var mnemonic
const hexRegex = /^[0-9a-fA-F]+$/

while (!address.startsWith('0x'+prefix)) {
    if(!hexRegex.test(prefix)){
        prefix=prompt("not hex! please enter new prefix: ")
        continue        
    }

    count = count + 1
    if(count%5000==0)
        console.log("calculating...")

    mnemonic = bip39.generateMnemonic()
    const seed = bip39.mnemonicToSeedSync(mnemonic)
    const hdWallet = hdkey.fromMasterSeed(seed)
    const keyPair = hdWallet.derivePath("m/44'/60'/0'/0/0")
    const wallet = keyPair.getWallet()
    address = wallet.getChecksumAddressString()
}
console.log(mnemonic)
console.log(address)
