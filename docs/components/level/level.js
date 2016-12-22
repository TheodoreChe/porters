(function() {
    'use strict';

    let levels = {
        1: {
            'name': 'level-1',
            'turtlesPositions': [[1, 1], [4, 2]],
            'goalsPositions': [[3, 3], [4, 4]]},
        2: {
            'name': 'level-2',
            'turtlesPositions': [[3, 0], [1, 4]],
            'goalsPositions': [[2, 2], [3, 2]]}};

    /**
     *
     * Class representing a level.
     * @class Sounds
     */
    class Level {

        /**
         *
         * @param {object} param
         */
        constructor(param) {
            this._init(param);
        }

        /**
         *
         * @private
         */
        _init({turtles, goals, pusher, similar}) {
            this._turtles = turtles;
            this._goals = goals;
            this._push = pusher;
            this._sim = similar;
            this._levels = levels;
        }

        /**
         *
         * Starting current level
         * Set first position for turtles and goals
         * @param {number} number - level number
         */
        start(number) {
            this.level = this._levels[number];

            console.log(`${this.level.name} starting`);

            document.body.className = this.level.name;

            this._push(this._turtles, this.level.turtlesPositions);
            this._push(this._goals, this.level.goalsPositions);
        }

        /**
         *
         * Finish level
         * @param {array} pos
         */
        finish(pos) {
            return this._sim(pos, this.level.goalsPositions);
        }
    }
    window.Level = Level;
})(window);
