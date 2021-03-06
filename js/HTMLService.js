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
        if(products.length === 0) {
            appendEmptyLabel();
        }
        products.forEach(appendProduct);
    }

    function appendEmptyLabel() {
        var element = buildEmptyLabel();
        productsList.appendChild(element);
    }

    function buildEmptyLabel() {
        var a = document.createElement('a');
        a.classList.add('list-group-item');
        a.innerHTML = 'Your cart is empty.';
        return a;
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
        span.innerHTML = formatPrice(price);
        return span;
    }

    function buildListItem() {
        var a = document.createElement('a');
        a.classList.add('list-group-item');
        return a;
    }

    function formatPrice(price) {
        if (hasDecimalDigit(price)) {
            var length = getDigitCount(price);
            return price.toPrecision(2 + getDigitCount(price));
        } else {
            return price + '.00';
        }
    }

    function getDigitCount(price) {
        price = price.toString();
        return price.substring(0, price.indexOf('.')).length;
    }

    function hasDecimalDigit(price) {
        return (price - Math.floor(price)) != 0;
    }

    return {
        updateCart: updateCart
    }
    
})();