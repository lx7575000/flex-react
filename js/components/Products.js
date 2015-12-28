const React = require("react");
const QuantityControl = require("./QuantityControl");
const {cartItems,products} = require("../data");

//step 1 
//add CartStore to Product
const CartStore = require('../stores/CartStore');
const {getCartItems, getCartItem, addCartItem} = CartStore;

//step 2 
//add LikeStore to Product View
const LikeStore = require('../stores/LikeStore');
const {getLikedItems, addLikedItem, removeLikedItem} = LikeStore;

class Product extends React.Component{
  //用来添加Item到Cart当中
  clickAddBtn(id){
    addCartItem(id);
  }

  clickLikedBtn(){
    let pid = this.props.product.id;
    if(this.props.isLiked){
      removeLikedItem(pid);
    }else{
      addLikedItem(pid);
    }
  }

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
          <img className="product__add__icon" src="img/cart-icon.svg" 
               onClick={this.clickAddBtn.bind(this, id)} 
          />
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

          <img className="product__heart" 
               src={this.props.isLiked ? 'img/heart-liked.svg': "img/heart.svg"} 
               onClick={this.clickLikedBtn.bind(this)}/>
        </div>
      </div>
    );
  }
};

class Products extends React.Component{
  componentDidMount(){
    CartStore.addChangeListener(this.forceUpdate.bind(this));
    LikeStore.addChangeListener(this.forceUpdate.bind(this));
  }
  renderProducts() {
    let likedItems = getLikedItems();
    let productViews = Object.keys(products).map(id => {
      let product = products[id];
      let liked = typeof likedItems[id] !== 'undefined';
      return (
        <Product 
          key={id} 
          product={product} 
          isLiked={liked}
        />
      );
    });
    //添加了一个判断是否存在于另一个likedItems中。
    return productViews;
  }

  render() {
    return (
      <div ref="products" className="products">
        {this.renderProducts()}
      </div>
    );
  }
};

module.exports = Products;