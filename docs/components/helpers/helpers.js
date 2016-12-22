(function() {
    'use strict';

    /**
     *
     * Class representing a helpers.
     * @class Sounds
     */
    class Helpers {

        /**
         *
         * Return querySelectorAll like Array
         * @param {object} el
         * @return {Array}
         * @private
         */
        arr(el) {
            return Array.prototype.slice.apply(el);
        };

        /**
         *
         * @param {array} arrA
         * @param {array} arrB
         * @return {boolean}
         */
        similar(arrA, arrB) {
            let arrA0 = '' + arrA[0];
            let arrA1 = '' + arrA[1];
            let arrB0 = '' + arrB[0];
            let arrB1 = '' + arrB[1];

            return ((arrA0 == arrB0 || arrA0 == arrB1)
            && (arrA1 == arrB0 || arrA1 == arrB1));
        }
    }
    window.Helpers = Helpers;
})(window);
