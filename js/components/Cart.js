const React = require("react");
const Ps = require("perfect-scrollbar");

const {products} = require("../data");
const QuantityControl = require("./QuantityControl");

//step 1 
//add CartStore to Cart
const CartStore = require('../stores/CartStore');
const {getCartItems, getCartItem, removeCartItem} = CartStore;

let Cart = React.createClass({
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));

    let {$content} = this.refs;
    Ps.initialize($content);
  },

  renderCartItems() {
    // let cartItems = ...;
    let cartItems = getCartItems();
    return Object.keys(cartItems).map(key => {
      let item = cartItems[key];
      return <CartItem key={key} item={item}/>
    });
  },

  render() {
    return (
      <div className="cart">
        <h3 className="cart__title">Shopping Cart</h3>
        <div ref="$content" className="cart__content">
          <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>

          {this.renderCartItems()}

        </div> {/* cart-item */}
      </div>
    );
  }
});

let CartItem = React.createClass({
  //删除掉购物车中的Item
  ClickRmBtn(id){
    removeCartItem(id);
  },
  render: function() {
    let {item} = this.props;
    let {id,quantity} = this.props.item;
    let {price,imagePath,name} = products[id];

    let priceDisplay = `$${price}`
    if(quantity >= 2) {
      priceDisplay = `${priceDisplay} x ${quantity}`
    }

    return (

      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={imagePath} />
          </div>

          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
              {name}
            </div>
            <div className="cart-item__price">
              {priceDisplay}
            </div>
          </div>
          <img className="cart-item__trash" src="img/trash-icon.svg" onClick={this.ClickRmBtn.bind(this, id)} />
        </div> {/* cart-item__top-part */}

        <div className="cart-item__qty">
          <QuantityControl item={item}/>
        </div>



      </div>
    );
  }
});

module.exports = Cart;