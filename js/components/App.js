const React = require("react");

const SiteTitle = require("./SiteTitle");
const Checkout = require("./Checkout");
const Cart = require("./Cart");
const Products = require("./Products");
const FilterBtn = require('./FilterBtn');

let App = React.createClass({
  // The `render` method will generate the `buyshoes` site's virtual DOM.
  render: function() {
    return (
      <div className="site">
        <div className="bg">
          <div className="bg__img">
          </div>
        </div>

        <div className="site__main">
          <div className="site__left-sidebar">
            <SiteTitle/>
            <FilterBtn/>
          </div>
          <div className="site__content">
            <Products/>
          </div> {/* site__content */}
        </div> {/* site__main */}
        <div className="site__right-sidebar">
          <Cart/>
          <Checkout/>
        </div> {/* site__right-sidebar */}
        <a className="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg" />
        </a>
      </div>
    );

    return (
      <div className="site">
        <div className="bg">
          <div className="bg__img">
          </div>
        </div>

        <div className="site__main">
          <div className="site__left-sidebar">
            <SiteTitle/>
          </div>
          <div className="site__content">
            <Products/>
          </div> {/* site__content */}
        </div> {/* site__main */}
        <div className="site__right-sidebar">
          <Cart/>
          <Checkout/>
        </div> {/* site__right-sidebar */}
        <a className="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg" />
        </a>
      </div>
    );
  }
});

module.exports = App;