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
     * Init helpers
     */
    let hp = new Helpers;

    /**
     *
     * Init Sounds
     */
    let bgSound = new Sounds({
        'src': 'components/sounds/back.mp3',
        'loop': true,
        'delay': .432});

    /**
     *
     * Start background music
     */
    bgSound.play();

    /**
     *
     * Mute music in a page with spacebar or "M" button
     */
    document.addEventListener('keydown', function(event) {
        if ((event.keyCode || event.which) == 32 || (event.keyCode || event.which) == 77) {
            bgSound.toggle(muteSwitchBtn);
        }
    });

    /**
     *
     * Init Grid
     */
    new Grid({
        'el': document.querySelector('.grid'),
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
     * Change text on the mute button
     * @param {string} pm - play||mute
     */
    function muteSwitchBtn(pm) {
        document.querySelector('.music-mute-btn').dataset.volume = pm;
    }

    /**
     *
     * Init Board
     */
    let board = new Board({
        'el': document.querySelector('.board')});

    /**
     *
     * Turtles and goals selectors
     */
    let $turtles = hp.array(document.querySelectorAll('.turtle'));
    let $goals = hp.array(document.querySelectorAll('.board__target'));

    /**
     * Keyboard event listener
     */
    board.lifter({
        'el': $turtles,
        'size': 5});

    /**
     *
     * Init Level 1
     */
    let level1 = new Level({
        'name': 'level-1',
        'turtles': $turtles,
        'goals': $goals,
        'turtlesP': [[1, 1], [4, 2]],
        'goalsP': [[3, 3], [4, 4]],
        'pusher': board.position});

    /**
     *
     * Start Level 1
     */
    level1.start();
})();
