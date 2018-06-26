let Block = require('./models/block')
let Transaction = require('./models/transaction')
let BlockChain = require('./models/blockchain')

let genesisBlock = new Block()
let blockchain = new BlockChain(genesisBlock)

let transaction = new Transaction('NamTran','DucDuy',100)
let firstBlock = blockchain.getNextBlock([transaction])
blockchain.addBlock(firstBlock)

let secondBlockTransaction = new Transaction('DucDuy','NgocMinh',20)
let secondBlock = blockchain.getNextBlock([secondBlockTransaction])
blockchain.addBlock(secondBlock)

console.log(blockchain)