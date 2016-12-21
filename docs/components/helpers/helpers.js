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
        array(el) {
            return Array.prototype.slice.apply(el);
        };

    }
    window.Helpers = Helpers;
})(window);
