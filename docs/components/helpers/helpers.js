(function() {
    'use strict';

    /**
     *
     * Class representing a helpers.
     * @class Sounds
     */
    class Helpers {

        /**
         *
         * Return querySelectorAll like Array
         * @param {object} el
         * @return {Array}
         * @private
         */
        array(el) {
            return Array.prototype.slice.apply(el);
        };

        /**
         *
         * @param {object} el
         * @param {number} key
         * @param {string} dir - left||right||up||down
         * @param {number} stop
         * @param {object} pusher
         */
        elPush({el, key, dir, stop, pusher}) {
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
                            stoper = (stop != yp++)
                            break;
                        case 'left':
                            stoper = (stop != xp--)
                            break;
                        case 'right':
                            stoper = (stop != xp++)
                            break;
                        default:
                            console.log('wrong direction');
                    }
                    if (stoper) {
                        pusher(item, [xp, yp]);
                    }
                });
            }
        }

    }
    window.Helpers = Helpers;
})(window);
