(function() {
    'use strict';

    /**
     *
     * Class representing a menu.
     * @class Sounds
     */
    class Sounds {

        /**
         *
         * @param {object} param
         */
        constructor(param) {
            this._init(param);
            this._loopInit();
            if (this._autoPlay) this.play();
        }

        /**
         *
         * @param {string} src - audio file path
         * @param {boolean} loop
         * @param {number} delay - for looping without gaps
         * @param {boolean} autoplay
         * @private
         */
        _init({src,
               loop = false,
               delay = .44,
               autoplay = false}) {
            this._src = src;
            this._checkLoop = loop;
            this._delay = delay;
            this._autoPlay = autoplay;
            this._audio = new Audio(this._src);
        }

        /**
         *
         * @private
         */
        _loop() {
            if (this._audio.currentTime > this._audio.duration - this._delay) {
                this._audio.currentTime = 0;
                this.play();
            }
        };

        /**
         *
         */
        pause() {
            this._audio.pause();
        }

        /**
         *
         * Music starts to play, and continues if the variable _checkLoop = true
         */
        play() {
            this._audio.play();
            if (this._checkLoop) {
                this._eventLoop = this._loop.bind(this);
                this._audio.addEventListener('timeupdate', this._eventLoop);
            }
        }

        /**
         *
         * On / off switch for volume
         * @param {object} callback - function with play||mute param
         */
        toggle(callback) {
            this._audio.volume = !this._audio.volume;
            callback(!!this._audio.volume ? 'play':'mute');
        }

        /**
         *
         * @private
         */
        _loopInit() {
            if (this._checkLoop) {
                this._eventLoop = this._loop.bind(this);
                this._audio.addEventListener('timeupdate', this._eventLoop);
            }
        }

    }
    window.Sounds = Sounds;
})(window);
