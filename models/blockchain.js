let sha256 = require('js-sha256')
let Block = require('../models/block')
class BlockChain {
	constructor(genesisBlock){
		this.blocks = []
		this.addBlock(genesisBlock)
	}

	addBlock(block){
		if(this.blocks.length == 0){
			block.previousHash = "0000000000000000"
			block.hash = this.generateHash(block)
			let currentTime = new Date()
			block.timestamp = currentTime.toUTCString()
		}
		this.blocks.push(block)
	}

	generateHash(block){
		return sha256(block.key)
	}

	getPreviousBlock(){
		return this.blocks[this.blocks.length -1]
	}

	getNextBlock(transactions){
		let block = new Block()
		transactions.forEach(function (transaction){
			block.addTransaction(transaction)
		});

		let previousBlock = this.getPreviousBlock()
		block.index = this.blocks.length
		block.previousHash = previousBlock.hash
		block.hash = this.generateHash(block)
		let currentTime = new Date()
		block.timestamp = currentTime.toUTCString()
		return block

	}
}
module.exports = BlockChain