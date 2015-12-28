const EventEmitter = require("events");
let  {products} = require('../data');
let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _likedItems = {};

module.exports = {
	addLikedItem(id){
		let product = products[id];
		if(product){
			_likedItems[id] = product;
		}
		emitChange();
	},
	removeLikedItem(id){
		delete _likedItems[id];
		emitChange();
	},
	getLikedItems(){
		return _likedItems;
	},
	likedItems(){
		return _likedItems;
	},
	addChangeListener(callback){
		emitter.addListener('change', callback);
	},
	removeChangeListener(callback){
		emitter.removeListener('change', callback);
	}
}