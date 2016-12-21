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
            console.log('%c' + el.className
                + ' position change', 'color: #ccc');

            el.style.left = `${(pos[0] * 90)}px`;
            el.style.top = `${(pos[1] * 90)}px`;
            el.dataset.x = pos[0];
            el.dataset.y = pos[1];
        }

        /**
         *
         * @param {string} dir
         * @return {object}
         */
        vector(dir) {
            let key = {
                'up': {x: 0, y: -1},
                'right': {x: 1, y: 0},
                'down': {x: 0, y: 1},
                'left': {x: -1, y: 0}};

            return key[dir];
        }

        /**
         *
         * @param {keyboardEvent} event
         * @param {object} el
         * @param {number} size
         * @param {array} keys
         */
        lift({event, el, size, keys}) {
            let code = event.keyCode
                    || event.which;

            let meta = event.altKey
                    || event.ctrlKey
                    || event.shiftKey
                    || event.metaKey;

            if (keys[code] !== undefined) {
                if (!meta) {
                    event.preventDefault();
                    el.map((item) => {
                        let yNow = + item.dataset.y;
                        let xNow = + item.dataset.x;

                        let yNext = yNow + this.vector(keys[code]).y;
                        let xNext = xNow + this.vector(keys[code]).x;

                        item.ypos = yNext >= 0 && yNext < size ? yNext : yNow;
                        item.xpos = xNext >= 0 && xNext < size ? xNext : xNow;
                    });

                    let stoper =
                        (el[0].ypos !== el[1].ypos) ||
                        (el[0].xpos !== el[1].xpos);

                    if (stoper) {
                        el.map((item) => {
                            this.position(item, [item.xpos, item.ypos]);
                        });
                    }
                }
            }
        }

        /**
         *
         * @param {object} el
         * @param {number} size
         */
        lifter({el, size}) {
            let self = this;
            let keys = {
                38: 'up',
                39: 'right',
                40: 'down',
                37: 'left'};

            document.addEventListener('keydown', (event) => {
                self.lift({
                    'event': event,
                    'el': el,
                    'size': size,
                    'keys': keys});
            });
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
