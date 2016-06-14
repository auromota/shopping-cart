var ProductService = (function () {

    var localStorageKey = 'products';
    var products = [];

    function saveProduct(product) {
        products.push(product);
        window.localStorage[localStorageKey] = JSON.stringify(products);
    }

    function getProducts() {
        var productsString = window.localStorage[localStorageKey];
        products = JSON.parse(productsString);
    }

    return {
        saveProduct: saveProduct,
        getProducts: getProducts
    };
})();