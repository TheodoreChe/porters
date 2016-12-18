(function() {
    'use strict';

    /**
     *
     * Class representing a board.
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
            this._$board = el;
        }

        /**
         *
         * To move turtles or something else on the board.
         * @param {object} el
         * @param {array} pos
         */
        position(el, pos) {
            console.log('%c' + el.className + ' position change', 'color: #ccc');

            el.style.left = `${(pos[0] * 90)}px`;
            el.style.top = `${(pos[1] * 90)}px`;
            el.dataset.x = pos[0];
            el.dataset.y = pos[1];
        }

        /**
         *
         * @private
         */
        _render() {
            this._$board.innerHTML = `<div class="turtle" data-index="1"></div>
            <div class="turtle" data-index="2"></div>
            <div class="board__target"></div>
            <div class="board__target"></div>`;
        }

    }
    window.Board = Board;
})(window);
