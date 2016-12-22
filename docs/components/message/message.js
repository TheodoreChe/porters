(function() {
    'use strict';

    let tpl = window.messageTpl;
    /**
     *
     * Class representing a grid.
     * @class Grid
     */
    class Message {

        /**
         *
         * @param {object} param
         */
        constructor({el}) {
            this._tpl = tpl;
            this._message = el;
        }

        /**
         *
         * @private
         */
        show({title}) {
            this._message.innerHTML = this._tpl({
                'titleText': title});
            console.log(this._message);
            this._message.dataset.show = 'show';
        }

    }
    window.Message = Message;
})(window);
