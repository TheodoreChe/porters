(function() {
    'use strict';

    let Sounds = window.Sounds;
    let Grid = window.Grid;
    let Panel = window.Panel;
    let Board = window.Board;

    /**
     *
     * Init game container
     */
    document.querySelector('.main').innerHTML='<div class="game"></div>';

    /**
     *
     * Init Sounds
     */
    let bgSound = new Sounds({
        'src': 'components/sounds/back.mp3',
        'loop': true,
        'delay': .432});
    bgSound.play();

    /**
     *
     * Mute sound listener
     */
    document.addEventListener('keydown', function(event) {
        if ((event.keyCode || event.which) == 32) {
            bgSound.toggle(muteSwitchBtn);
        }
    });

    /**
     *
     * Init Grid
     */
    new Grid({
        'el': document.querySelector('.game'),
        'size': 5});

    /**
     *
     * Init Panel
     */
    let panel = new Panel({'el': document.querySelector('.panel')});

    /**
     *
     * Add music mute button
     */
    panel.addButton({
        'text': 'Music: ',
        'classname': 'music-mute-btn',
        'click': (e) => {
            bgSound.toggle(muteSwitchBtn);
        }});

    /**
     *
     * @param {string} pm - play||mute
     */
    function muteSwitchBtn(pm) {
        document.querySelector('.music-mute-btn')
            .className = 'panel__btn music-mute-btn ' + pm;
    }

    /**
     *
     * Init Panel
     */
    new Board({'el': document.querySelector('.game')});
})();
