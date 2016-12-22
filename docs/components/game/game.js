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
    let Message = window.Message;

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
             * Helpers
             */
            this._hp = new Helpers;
            this.sim = this._hp.similar;

            /**
             *
             * Sounds
             */
            this._initSounds();

            /**
             *
             * Panel
             */
            this._initPanel();

            /**
             *
             *  Grid
             */
            this._grid = new Grid({
                'el': document.querySelector('.grid'),
                'size': 5});

            /**
             *
             * Board
             */
            this._board = new Board({
                'el': document.querySelector('.board')});

            /**
             *
             * Turtles and goals selectors
             */
            this._$turtles = this._hp.arr(document.querySelectorAll('.turtle'));
            this._$goals = this._hp.arr(document.querySelectorAll('.board__target'));
            this.tracker = this.tracker.bind(this);
            this.levelNumber;

            /**
             * Turtles position management
             */
            this._board.lifter({
                'el': this._$turtles,
                'goals': this._$goals,
                'size': 5,
                'tracker': this.tracker});

            /**
             * Levels
             */
            this._level = {};
            this._initLevels();

            /**
             *
             * Board
             */
            this._message = new Message({
                'el': document.querySelector('.message')});

            /**
             * buttons
             */
            this._buttonEvents();
        }

        /**
         *
         * @param {array} pos
         */
        tracker() {
            if (this._level.finish(this._board.coord)) {
                document.querySelector('.main').dataset.game = 'pause';
                this._board.freeze = true;
                this._message.show({
                    title: 'Congrats!'});
            }
        }

        /**
         *
         * @private
         */
        _nextLevel() {
            document.querySelector('.main').dataset.game = '';
            document.querySelector('.message').dataset.show = '';
            this._level.start(++this.levelNumber);
            this._board.freeze = false;
        }

        /**
         *
         * @private
         */
        _buttonEvents() {
            let self = this;
            document.querySelector('body').addEventListener('click',
                function(e) {
                    if (e.target.dataset.btn == 'sound') {
                        self._bgSound.toggle(self._muteSwitchBtn);
                    }
                    if (e.target.dataset.btn == 'next') {
                        self._nextLevel();
                    }
                });

        }

        /**
         *
         * @private
         */
        _initLevels() {
            /**
             *
             * Init Levels
             */
            this._level = new Level({
                'turtles': this._$turtles,
                'goals': this._$goals,
                'pusher': this._board.posArr,
                'similar': this.sim});

            /**
             *
             * Start Level 1
             */
            this.levelNumber = 1;
            this._level.start(this.levelNumber);
        }

        /**
         *
         * @private
         */
        _initPanel() {
            this._panel = new Panel({'el': document.querySelector('.panel')});
        }

        /**
         *
         * @private
         */
        _initSounds() {
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
             * Mute music in a page with spacebar or "M" button
             */
            let self = this;
            document.addEventListener('keydown', function(event) {
                if ((event.keyCode || event.which) == 32 || (event.keyCode || event.which) == 77) {
                    self._bgSound.toggle(self._muteSwitchBtn);
                }
            });
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
