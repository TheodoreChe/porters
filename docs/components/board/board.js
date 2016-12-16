(function() {
    'use strict';

    /**
     *
     * Class representing a menu.
     * @class Sounds
     */
    class Board {

        /**
         *
         * @param {object} param
         */
        constructor(param) {
            this._init(param);
            this._render();
        }

        /**
         *
         * @private
         */
        _init({el}) {
            this._$game = el;
        }


        /**
         *
         * @private
         */
        _render() {
            this._$game.innerHTML += `<div class="board"></div>`;
        }

    }
    window.Board = Board;
})(window);
