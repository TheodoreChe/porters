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
            this.coord = [];
            this.freeze = false;
        }

        /**
         *
         * @param {array} arr
         * @param {array} position
         */
        posArr(arr, position) {
            arr.map((el, index) => {
                let pos = position[index];
                el.style.left = `${(pos[0] * 90)}px`;
                el.style.top = `${(pos[1] * 90)}px`;
                el.dataset.x = pos[0];
                el.dataset.y = pos[1];
            });
        }

        /**
         *
         * To move turtles or something else on the board.
         * @param {object} el
         * @param {array} pos
         */
        position(el, pos) {
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
         * @param {object} goals
         * @param {number} size
         * @param {array} keys
         */
        lift({event, el, goals, size, keys, tracker}) {
            let code = event.keyCode
                    || event.which;

            let meta = event.altKey
                    || event.ctrlKey
                    || event.shiftKey
                    || event.metaKey;

            if (keys[code] !== undefined && !this.freeze) {
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
                    console.log('start');


                    this.coord = [[el[0].xpos, el[0].ypos], [el[1].xpos, el[1].ypos]];
                }
            }
        }


        /**
         *
         * @param {object} el
         * @param {object} goals
         * @param {number} size
         * @param {object} tracker
         */
        lifter({el, goals, size, tracker}) {
            let self = this;
            let keys = {
                38: 'up',
                39: 'right',
                40: 'down',
                37: 'left'};
            let pos;



            document.addEventListener('keydown', (event) => {
                return pos = self.lift({
                    'event': event,
                    'el': el,
                    'goals': goals,
                    'size': size,
                    'keys': keys,
                    'tracker': tracker});
            });

            el[0].addEventListener('transitionend', tracker, false);
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
