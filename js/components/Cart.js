const React = require("react");
const Ps = require("perfect-scrollbar");

const {products} = require("../data");
const QuantityControl = require("./QuantityControl");

//step 1 
//add CartStore to Cart
const CartStore = require('../stores/CartStore');
const {getCartItems, getCartItem, removeCartItem} = CartStore;

//step 2
//add ConnectedStore to Cart View
const ConnectedStore = require('./ConnectedStore');

class Cart extends React.Component{
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));

    let {$content} = this.refs;
    Ps.initialize($content);
  }
   componentWillUnmount(){
    CartStore.removeChangeListener(() => {console.log('unmount cart ..')});
  }
   componentWillReceiveProps () {

       console.log('Child componentWillReceiveProps');

    }

    shouldComponentUpdate (nextProps, nextState) {

        console.log('Child shouldComponentUpdate');

        return true;

    }

    componentWillUpdate() {

        console.log('Child componentWillUpdate');

    }

    componentDidUpdate () {

        console.log('Child componentDidUpdate');

    }


  renderCartItems() {
    let {cartItems} = this.props;
    // let cartItems = getCartItems();
    return Object.keys(cartItems).map(key => {
      let item = cartItems[key];
      return <CartItem key={key} item={item}/>
    });
  }

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
};

class CartItem extends React.Component{
  //删除掉购物车中的Item
  ClickRmBtn(id){
    removeCartItem(id);
  }
  render() {
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
};

//Step 2 Add ConnectedCart Class in Cart View
class ConnectedCart extends React.Component{
     render() {
         return (
             <ConnectedStore
                 store={CartStore}
                 propNames={['cartItems']}
             >
                 {props => <Cart {...props} />}
             </ConnectedStore>
         );
     }
     //props只传入了cartItems
 };

module.exports = ConnectedCart;