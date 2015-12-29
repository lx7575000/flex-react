import React from 'react';
import ConnectedStore from './ConnectedStore';

function MakeConnectedComponent(ViewComponent,store,...propNames) {
  // 注意：ViewComponent 这个参数必须大写，为什么？
  class ConnectedViewComponent extends React.Component{
  	render(){
  		return (
  			<ConnectedStore
  				store = {store}
  				propNames={propNames}
  			>
  				{props => <ViewComponent {...props} {this.props}/>}
  			</ConnectedStore>
  		);
  	}
  }
  // TODO：定义 ConnectedViewComponent

  // 返回 Component
  return ConnectedViewComponent;
}

module.exports = MakeConnectedComponent;