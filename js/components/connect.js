const MakeConnectedComponent = require('./MakeConnectedComponent');

function connect(store, ...propNames){
	return function(target){
		return MakeConnectedComponent(target, store, ...propNames);
	};
}

module.exports = connect;