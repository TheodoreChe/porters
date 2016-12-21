(function() {
    'use strict';

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
        _init({name, turtles, goals, turtlesP, goalsP, pusher}) {
            this._levelName = name;
            this._turtles = turtles;
            this._goals = goals;
            this._tP = turtlesP;
            this._gP = goalsP;
            this._push = pusher;
        }

        /**
         *
         * Set first position for turtles and goals
         */
        startPositions() {
            console.log(`${this._levelName} start position`);
            this._turtles.map((t, i)=>{
                this._push(t, this._tP[i]);
            });
            this._goals.map((g, i)=>{
                this._push(g, this._gP[i]);
            });
        }

        /**
         *
         * Starting current level
         */
        start() {
            console.log(`${this._levelName} starting`);
            document.body.className = this._levelName;
            this.startPositions();
        }
    }
    window.Level = Level;
})(window);
