var HTMLService = (function () {

    var productsList;
    var totalPrice;

    function updateCart(products) {
        updateList(products);
        updateTotalPrice(products);
    }

    function updateTotalPrice(products) {
        calculateTotalPrice(products);
        var a = document.getElementById('totalPrice');
        a.innerHTML = '';
        var price = buildTotalPrice();
        a.appendChild(price);
    }

    function buildTotalPrice() {
        var div = buildListItem();
        var price = buildPrice(totalPrice);
        var total = buildTotalLabel();
        div.appendChild(price);
        div.appendChild(total);
        return div;
    }

    function buildTotalLabel() {
        var div = document.createElement('div');
        div.innerHTML = 'Total';
        return div;
    }

    function calculateTotalPrice(products) {
        totalPrice = 0;
        products.forEach(sum);
    }

    function sum(product) {
        totalPrice += product.price;
    }

    function updateList(products) {
        productsList = document.getElementById('productsList');
        productsList.innerHTML = '';
        products.forEach(appendProduct);
    }

    function appendProduct(product) {
        var element = buildProduct(product);
        productsList.appendChild(element);
    }

    function buildProduct(product) {
        var item = buildListItem();
        var price = buildPrice(product.price);
        var name = buildProductName(product);
        item.appendChild(price);
        item.appendChild(name);
        return item;
    }

    function buildProductName(product) {
        var div = document.createElement('div');
        div.innerHTML = product.name;
        return div;
    }

    function buildPrice(price) {
        var span = document.createElement('span');
        span.classList.add('badge');
        span.classList.add('badge-price');
        span.innerHTML = price;
        return span;
    }

    function buildListItem() {
        var a = document.createElement('a');
        a.classList.add('list-group-item');
        return a;
    }
    

    return {
        updateCart: updateCart
    }
})();