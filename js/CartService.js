var CartService = (function () {

    var _itemsArray = [];

    var _clearRef = 'clear';
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
        get: {
            value: get,
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
        _items.push(product);
        _items = _items;
    }

    function get() {
        return _items;
    }

    function clear() {
        _items = [];
    }

    function _load(products) {
        _items = CartStorageService.loadLocalStorage();
    }

})();