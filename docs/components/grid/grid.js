(function() {
    'use strict';

    /**
     *
     * Class representing a menu.
     * @class Sounds
     */
    class Grid {

        /**
         *
         * @param {object} param
         */
        constructor(param) {
            this._init(param);
            this._default();
            this._render();
        }

        /**
         *
         * @param {object} el
         * @param {object} size
         * @private
         */
        _init({el, size}) {
            this._size = size;
            this._$game = el;
            this._cells = [];
        }

        /**
         *
         * @private
         */
        _default() {
            for (let x = 0; x < this._size; x++) {
                let row = this._cells[x] = [];
                for (let y = 0; y < this._size; y++) {
                    row.push({'column': y, 'row': x, 'index': '' + x + y});
                }
            }
        }

        /**
         *
         * @private
         * @param {object} item
         * @return {HTMLElement}
         */
        _appendCell(item) {
            return item.map((item, index) => {
                console.log(item);
                return `<div
                class = "grid__cell"
                data-column = "${item.column}"
                data-index = "${item.index}"></div>`;
            }).join('');
        }

        /**
         *
         * @private
         * @return {HTMLElement}
         */
        _appendRow() {
            return this._cells.map((item, index) => {
                return `<div
                class = "grid__row"
                data-row = "${index}">
                ${this._appendCell(item)}
                </div>`;
            }).join('');
        }

        /**
         *
         * @private
         */
        _render() {
            this._$game.innerHTML += `<div
            class="grid">
            ${this._appendRow()}</div>`;
        }

    }
    window.Grid = Grid;
})(window);
