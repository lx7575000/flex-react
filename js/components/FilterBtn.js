const React = require('react');
const ProductStore = require('../stores/ProductStore');
const {toggleShowOnlyLike} = ProductStore;
const connect = require('./connect');

class FilterBtn extends React.Component{
    handleFilterBtnClick(){
        toggleShowOnlyLike();
    }

    render(){     
        return (
             <img 
                src={this.props.isFiltered ? "img/heart-liked.svg" : "img/heart.svg"} 
                onClick={this.handleFilterBtnClick.bind(this)}
                className="filter__heart" 
            />
        );
    }
}

module.exports = FilterBtn;

@connect(ProductStore, 'isFiltered')
class ConnectedFilterBtn extends FilterBtn {}

module.exports = ConnectedFilterBtn;