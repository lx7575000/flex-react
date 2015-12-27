const React = require("react");
const QuantityControl = require("./QuantityControl");
const {cartItems,products} = require("../data");

//step 1 
//add CartStore to Product
const CartStore = require('../stores/CartStore');
const {getCartItems, getCartItem, addCartItem} = CartStore;

let Product = React.createClass({
  //用来添加Item到Cart当中
  //
  clickAddBtn(id){
    addCartItem(id);
  },

  render() {
    let {id,name,price,imagePath} = this.props.product;
    let item = getCartItem(id);

    let productControl;
    if(item != null) {
      let {quantity} = item;
      productControl = (
        <QuantityControl item={item} variant="gray"/>
      );

    } else {
      productControl = (
        <a className="product__add">
          <img className="product__add__icon" src="img/cart-icon.svg" onClick={this.clickAddBtn.bind(this, id)} />
        </a>
      );
    }

    return (
      <div className="product">

        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath} />
          </div>

          <div className="product__control">
            {productControl}
          </div>

          <div className="product__price">
            {"$"+price}
          </div>
        </div>

        <div className="product__description">
          <div className="product__name">
            {name}
          </div>

          <img className="product__heart" src="img/heart.svg" />
        </div>
      </div>
    );
  }
});

let Products = React.createClass({
  componentDidMount(){
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  },
  renderProducts() {
    // let products ...
    let productViews = Object.keys(products).map(id => {
      let product = products[id];
      return (
        <Product key={id} product={product}/>
      );
    });

    return productViews;
  },

  render() {
    return (
      <div ref="products" className="products">
        {this.renderProducts()}
      </div>
    );
  },
});

module.exports = Products;