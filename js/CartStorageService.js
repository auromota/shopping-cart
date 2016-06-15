var CartStorageService = (function () {

    var localStorageKey = 'products';

    function updateLocalStorage(products) {
        window.localStorage[localStorageKey] = JSON.stringify(products);
    }

    function loadLocalStorage() {
        var productsString = window.localStorage[localStorageKey] || '[]';
        return JSON.parse(productsString);
    }

    var response = {};

    Object.defineProperties(response, {
        updateLocalStorage: { value: updateLocalStorage },
        loadLocalStorage: { value: loadLocalStorage }
    });

    return response;

})();