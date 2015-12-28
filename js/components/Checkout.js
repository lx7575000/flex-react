const React = require("react");

const {products} = require("../data");
//step 1 
//add CartStore to Checkout View
const CartStore = require('../stores/CartStore');
const {getCartItems} = CartStore;

let Checkout = React.createClass({
  componentDidMount(){
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  },
  render() {
    let subtotal = 0;
    let fixed_subtotal = 0;
    let cartItems = getCartItems();
    Object.keys(cartItems).forEach(key => {
      let {quantity} = cartItems[key];
      let {price} = products[key];
      subtotal += price * quantity;
      fixed_subtotal = subtotal.toFixed(2);
    });

    return (
      <div className="checkout">
        <hr className="checkout__divider" />

        <input type="text" className="checkout__coupon-input" placeholder="coupon code" />

        {/*
        <div className="checkout__line">
          <div className="checkout__line__label">
            Discount
          </div>
          <div className="checkout__line__amount">
            -$90
          </div>
        </div>
        */}

        <div className="checkout__line">
          <div className="checkout__line__label">
            Subtotal
          </div>
          <div className="checkout__line__amount">
            {`$${fixed_subtotal}`}
          </div>
        </div>

        <a className="checkout__button">
          <img className="checkout__button__icon" src="img/cart-icon.svg" />
          <div className="checkout__button__label">
            Checkout
          </div>
        </a>
      </div>
    );
  }
});

module.exports = Checkout;