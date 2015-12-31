const LikeStore = require('./LikeStore');
const {likedItems} = LikeStore;
const EventEmitter = require('events');

let emitter = new EventEmitter();

function emitChange() {
    emitter.emit('change');
}

let _products = {
    "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        gender: "man",
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        gender: "man",
    },

    "jameson-e-lite": {
        id: "jameson-e-lite",
        name: "Jameson E-Lite",
        price: 69.99,
        imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
        gender: "man",
    },

    "jameson-e-lite-julian-davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        gender: "man",
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "corby-womens-2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        gender: "woman",
    }
};

let _showOnlyLike = false;

module.exports = {
    productsData() {
            return _products;
        },

        filteredProducts() {
            if (!_showOnlyLike) {
                return this.productsData();
            } else {
                let liked = likedItems();
                let filteredItems = {};
                for (let id in _products) {
                    let item = _products[id];
                    if (id in liked) {
                        filteredItems[id] = item;
                    }
                }
                return filteredItems;
            }
        },
        toggleShowOnlyLike(flag) {
        if(typeof flag === 'boolean') {
            _showOnlyLike = flag;
        }else{
            _showOnlyLike = !_showOnlyLike;
        }

        emitChange();
        },
        isFiltered(){
            return _showOnlyLike;
        },
        addChangeListener(callback) {
            emitter.addListener("change", callback)
        },

        removeChangeListener(callback) {
            emitter.removeListener("change", callback)
        },
}
