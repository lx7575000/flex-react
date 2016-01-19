import React from 'react';

class ConnectedStore extends React.Component {
	componentDidMount(){
		const Store = this.props.store;
		Store.addChangeListener(this.forceUpdate.bind(this));
	}
     componentWillUnmount(){
    CartStore.removeChangeListener(() => {console.log('unmount  ..')});
  }
  render() {
    // `children` 属性是一个函数。
    let contentRenderFunctions = this.props.children;
 	let storeProps = {};
    // 1. 从 Store 中读取并调用对应的函数。
    // 2. 给 `contentRenderFunction` 传递数据。
    this.props.propNames.forEach((name) => {
    	storeProps[name] = this.props.store[name]();
    });


    return contentRenderFunctions(storeProps);
  }
}

module.exports = ConnectedStore;