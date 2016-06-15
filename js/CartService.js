var CartService = (function () {

    var _itemsArray = [];

    var _itemsRef = '_items';

    Object.defineProperty(this, _itemsRef, {
        get: function () {
            return _itemsArray;
        },
        set: function (value) {
            _itemsArray = value;
            HTMLService.updateCart(_itemsArray);
            CartStorageService.updateLocalStorage(_itemsArray);
        }
    })

    var response = {};

    Object.defineProperties(response, {
        buy: {
            value: buy,
            writable: false
        },
        clear: {
            value: clear,
            writable: false
        }
    });

    _load();

    return response;

    function buy(product) {
        this[_itemsRef].push(product);
        this[_itemsRef] = _items;
    }

    function clear() {
        this[_itemsRef] = [];
    }

    function _load(products) {
        this[_itemsRef] = CartStorageService.loadLocalStorage();
    }

})();