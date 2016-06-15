(function () {

    init();

    function init() {
        var form = document.getElementById('product');
        form.addEventListener('submit', formSubmitHandler);
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        if (isValid()) {
            var product = {
                name: getProductName(),
                price: getProductPrice()
            };
            ProductService.save(product);
            clearFields();
        } else {
            console.log('Inválido!');
        }
    }

    function clearFields() {
        var inputName = document.getElementById('productName');
        inputName.value = '';
        var inputPrice = document.getElementById('productPrice');
        inputPrice.value = '';
    }

    function getProductName() {
        var input = document.getElementById('productName');
        return input.value;
    }

    function getProductPrice() {
        var input = document.getElementById('productPrice');
        return input.value;
    }

    function isValid() {
        if (validateName()) {
            if (validatePrice()) return true;
            return false;
        }
        return false;
    }

    function validateName() {
        var name = getProductName();
        if (!name.trim().length) {
            showErrorName('You must pick a name for the product.');
            return false;
        }
        return true;
    }

    function showErrorName(text) {
        swal({
            title: 'Name is invalid!',
            text: text,
            type: 'error'
        });
    }

    function validatePrice() {
        var price = getProductPrice();
        if (!price.trim().length) {
            showErrorPrice('You must pick a price for the product.');
            return false;
        }
        if (isNaN(price)) {
            showErrorPrice('The price informed is not a valid number.');
            return false;
        }
        return true;
    }

    function showErrorPrice(text) {
        swal({
            title: 'Price is invalid!',
            text: text,
            type: 'error'
        });
    }

})();