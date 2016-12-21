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
         * @param {array} arrA
         * @param {array} arrB
         * @return {boolean}
         */
        similar(arrA, arrB) {
            let arrA0 = '' + arrA[0];
            let arrA1 = '' + arrA[1];
            let arrB0 = '' + arrB[0];
            let arrB1 = '' + arrB[1];

            return ((arrA0 == arrB0 || arrA0 == arrB1)
                && (arrA1 == arrB0 || arrA1 == arrB1));
        }

        /**
         *
         * @param {keyboardEvent} event
         * @param {object} el
         * @param {object} goals
         * @param {number} size
         * @param {array} keys
         */
        lift({event, el, goals, size, keys}) {
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

                    /**
                     *
                     * Anti-collision
                     */
                    let notCollide =
                        (el[0].ypos !== el[1].ypos) ||
                        (el[0].xpos !== el[1].xpos);

                    if (notCollide) {
                        el.map((item) => {
                            this.position(item, [item.xpos, item.ypos]);
                        });
                    }

                    /**
                     *
                     * Finish
                     */
                    let finish = this.similar(
                        [
                            [el[0].xpos, el[0].ypos],
                            [el[1].xpos, el[1].ypos]],
                        [
                            [goals[0].dataset.x, goals[0].dataset.y],
                            [goals[1].dataset.x, goals[1].dataset.y]]);

                    if (finish) {

                        console.log('FINISH FINISH FINISH');
                    }
                }
            }
        }

        /**
         *
         * @param {object} el
         * @param {number} size
         */
        lifter({el, goals, size}) {
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
                    'goals': goals,
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
