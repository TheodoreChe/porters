(function() {
    'use strict';

    let tpl = window.boardTpl;
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
            this._tpl = tpl;
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
         * @param {object} el
         * @param {number} key
         * @param {string} dir - left||right||up||down
         * @param {number} stop
         */
        elPush({el, key, dir, stop}) {
            if ((event.keyCode || event.which) == key) {
                el.map((item)=>{
                    let yp = item.dataset.y;
                    let xp = item.dataset.x;
                    let stoper;
                    switch (dir) {
                        case 'up':
                            stoper = (stop != yp--);
                            break;
                        case 'down':
                            stoper = (stop != yp++);
                            break;
                        case 'left':
                            stoper = (stop != xp--);
                            break;
                        case 'right':
                            stoper = (stop != xp++);
                            break;
                        default:
                            console.log('wrong direction');
                    }
                    if (stoper) {
                        this.position(item, [xp, yp]);
                    }
                });
            }
        }

        /**
         *
         * @private
         */
        _render() {
            this._$board.innerHTML = this._tpl();
        }

    }
    window.Board = Board;
})(window);
