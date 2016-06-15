var ProductService = (function () {

    var localStorageKey = 'products';
    var products = [];

    get();

    function save(product) {
        product.price = parseFloat(product.price);
        products.push(product);
        window.localStorage[localStorageKey] = JSON.stringify(products);
        HTMLService.updateCart(products);
    }

    function get() {
        var productsString = window.localStorage[localStorageKey] || '[]';
        products = JSON.parse(productsString);
        HTMLService.updateCart(products);
    }

    return {
        save: save
    };
    
})();