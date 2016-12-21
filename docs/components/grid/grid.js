(function() {
    'use strict';

    let tpl = window.gridTpl;
    /**
     *
     * Class representing a grid.
     * @class Grid
     */
    class Grid {

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
         * @param {object} el
         * @param {object} size
         * @private
         */
        _init({el, size}) {
            this._size = size;
            this._$grid = el;
            this._tpl = tpl;
            this._blocks = [[1, 2]];
        }

        /**
         *
         * @private
         */
        _render() {
            this._$grid.innerHTML = this._tpl({
                'size': this._size});
        }

    }
    window.Grid = Grid;
})(window);
