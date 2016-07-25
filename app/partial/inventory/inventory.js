angular.module('app').controller('InventoryCtrl',function($scope){

    (function() {

        window.inputNumber = function(el) {

            var min = el.attr('min') || false;
            var max = el.attr('max') || false;

            var inventoryNumber = {};

            inventoryNumber.dec = el.prev();
            inventoryNumber.inc = el.next();

            el.each(function() {
                init($(this));
            });

            function init(el) {

                inventoryNumber.dec.on('click', decrement);
                inventoryNumber.inc.on('click', increment);

                function decrement() {
                    var value = el[0].value;
                    value--;
                    if(!min || value >= min) {
                        el[0].value = value;
                    }
                }

                function increment() {
                    var value = el[0].value;
                    value++;
                    if(!max || value <= max) {
                        el[0].value = value++;
                    }
                }
            }
        };
    })();

    inputNumber($('.input-number'));

});
