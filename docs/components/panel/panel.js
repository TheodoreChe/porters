(function() {
    'use strict';

    let tmpl = window.menuTpl;

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
        }

        /**
         *
         * @param {string} text
         * @param {string} classname
         * @param {object} click
         */
        addButton({text = 'Button', classname = '', click = {}}) {
            let btn = document.createElement('div');
            let txt = document.createTextNode(text);
            btn.appendChild(txt);
            btn.className = 'panel__btn ' + classname;
            this._buttons.push(btn);

            /**
             *
             * I check clicks on the body
             * as the button is passed by value in _appendButton()
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
         * @return {string}
         */
        _appendButton() {
            return this._buttons.map((item) => {
                return item.outerHTML;
            }).join('');
        }

        /**
         *
         * @private
         */
        _render() {
            this._$panel.innerHTML = `<div class="panel__header">
            <h1 class="panel__title">Turtle Twins</h1></div>
            ${this._appendButton()}`;
        }

    }
    window.Panel = Panel;
})(window);
