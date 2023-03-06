# 109700005-bdaf-lab2
### What does this program do?
This `Node.js` application  generates a random Ethereum wallet address until it starts with the prefix entered by the user. It uses the `prompt-sync` library to get the user's input, and then loops through generating mnemonics and wallet addresses using the `bip39` and `ethereumjs-wallet` libraries until an address start with the prefix. Finally, the program outputs the generated mnemonic and wallet address.
## Installation
```
npm install bip39 ethereumjs-wallet prompt-sync
```
## Execution
1. Input target prefix. (if it's not in hex, the program would ask to input another prefix)
2. Wait for it... (The program will print 'calculating...' to ensure it's still working.)
3. The output format will be a 12-word mnemonic and its corresponding Ethereum address. Below is an example:
```
please enter prefix: 1a
calculating...
industry govern tent client plug lecture shoulder indicate category furnace quick south
0x1acB1f18b099909f3457A228F541bFc966e641C1
```
## Reference
Use [Mnemonic Code Converter](https://iancoleman.io/bip39/) to check if the result is correct. Also, please go to [bip39](https://github.com/bitcoinjs/bip39) and [ethereumjs-wallet](https://github.com/ethereumjs/ethereumjs-wallet) for more details.
