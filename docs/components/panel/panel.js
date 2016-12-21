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
        _init({el}) {
            this._$panel = el;
            this._buttons = [];
            this._tpl = tpl;
        }

        /**
         *
         * @param {string} text
         * @param {string} classname
         * @param {object} click
         */
        addButton({text = 'Button', classname = '', click = {}}) {
            let btn = {};
            btn.className = classname;
            btn.txt = text;
            this._buttons.push(btn);

            /**
             *
             * It binds the button's click event by class name
             * Maybe it is a bad practice
             */
            document.querySelector('body').addEventListener('click',
                function(e) {
                    if (e.target.className.includes(btn.className)) {
                        click();
                    }
                });

            this._render();
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
