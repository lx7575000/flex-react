const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _cartItems = {};

module.exports = {
  // 读方法
  getCartItems(){
    return _cartItems;
  },
  getCartItem(id){
    return _cartItems[id];
  },

  // 写方法。这些就是 "action"
  addCartItem(id){
    let item = {
      id: id,
      quantity: 1
    };
    _cartItems[id] = item;
    emitChange();
  },
  removeCartItem(id){
    delete _cartItems[id];
    emitChange();
  },
  updateCartItemQuantity(id,quantity){
    quantity > 0 ? _cartItems[id].quantity = quantity : delete _cartItems[id];
    emitChange();
  },

  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  },
}