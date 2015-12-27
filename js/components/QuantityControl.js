const React = require("react");
//step 1 
//add CartStore to QuantityControl
const CartStore = require('../stores/CartStore');
const {updateCartItemQuantity} = CartStore;

let QuantityControl = React.createClass({
  ClickUpdateQuantity(id, quantity){
    updateCartItemQuantity(id, quantity);
  },

  render() {
    let {variant} = this.props;
    let {id, quantity} = this.props.item;

    let className = "adjust-qty";
    if(variant === "gray") {
      className = "adjust-qty adjust-qty--gray";
    }

    return (
      <div className={className}>
        <a className="adjust-qty__button" onClick={this.ClickUpdateQuantity.bind(this, id, quantity - 1)}>-</a>
        <div className="adjust-qty__number">{quantity}</div>
        <a className="adjust-qty__button" onClick={this.ClickUpdateQuantity.bind(this, id, quantity + 1)} >+</a>
      </div>
    );
  }
});

module.exports = QuantityControl;