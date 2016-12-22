(function() {
    'use strict';

    let tpl = window.panelTpl;

    /**
     *
     * Class representing info panel.
     * @class Sounds
     */
    class Panel {

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
        _init({el,level}) {
            this._$panel = el;
            this._$level = level;
            this._buttons = [];
            this._tpl = tpl;
        }

        /**
         *
         * @private
         */
        _render() {
            this._$panel.innerHTML = this._tpl({
                'btns': this._buttons});
        }

    }
    window.Panel = Panel;
})(window);
