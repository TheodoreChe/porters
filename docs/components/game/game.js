(function() {
    'use strict';

    /**
     *
     * Components list
     */
    let Helpers = window.Helpers;
    let Sounds = window.Sounds;
    let Grid = window.Grid;
    let Panel = window.Panel;
    let Board = window.Board;
    let Level = window.Level;

    /**
     *
     * Class representing a game.
     * @class Game
     */
    class Game {
        /**
         *
         * @param {object} param
         */
        constructor() {
            this._init();
        }

        /**
         *
         * @private
         */
        _init() {
            /**
             *
             * Init helpers
             */
            this._hp = new Helpers;

            /**
             *
             * Init Sounds
             */
            this._bgSound = new Sounds({
                'src': 'components/sounds/back.mp3',
                'loop': true,
                'delay': .432});

            /**
             *
             * Start background music
             */
            this._bgSound.play();

            /**
             *
             * Init Panel
             */
            this._panel = new Panel({'el': document.querySelector('.panel')});

            /**
             *
             * Add music mute button
             */
            this._panel.addButton({
                'text': 'Music: ',
                'classname': 'music-mute-btn',
                'click': (e) => {
                    this._bgSound.toggle(this._muteSwitchBtn);
                }});

            /**
             *
             * Mute music in a page with spacebar or "M" button
             */
            let self = this;
            document.addEventListener('keydown', function(event) {
                if ((event.keyCode || event.which) == 32 || (event.keyCode || event.which) == 77) {
                    self._bgSound.toggle(self._muteSwitchBtn);
                }
            });

            /**
             *
             * Init Grid
             */
            this._grid = new Grid({
                'el': document.querySelector('.grid'),
                'size': 5});



            /**
             *
             * Init Board
             */
            this._board = new Board({
                'el': document.querySelector('.board')});

            /**
             *
             * Turtles and goals selectors
             */
            this._$turtles = this._hp.array(document.querySelectorAll('.turtle'));
            this._$goals = this._hp.array(document.querySelectorAll('.board__target'));

            /**
             * Keyboard turtles management
             */
            this._board.lifter({
                'el': this._$turtles,
                'goals': this._$goals,
                'size': 5});

            /**
             *
             * Init Level 1
             */
            this.level1 = new Level({
                'name': 'level-1',
                'turtles': this._$turtles,
                'goals': this._$goals,
                'turtlesP': [[1, 1], [4, 2]],
                'goalsP': [[3, 3], [4, 4]],
                'pusher': this._board.position});

            /**
             *
             * Start Level 1
             */
            this.level1.start();

        }

        /**
         *
         * Change text on the mute button
         * @param {string} pm - play||mute
         */
        _muteSwitchBtn(pm) {
            document.querySelector('.music-mute-btn').dataset.volume = pm;
        }


    }
    window.Game = Game;
})(window);
