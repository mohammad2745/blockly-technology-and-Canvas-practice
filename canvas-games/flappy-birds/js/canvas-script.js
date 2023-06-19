window.onload = function() {

    // Canvas Definition
    let canvas = document.getElementById('flappy-monster-game');

    // Game object
    let flappyMonster = new FlappyMonster(canvas);
    flappyMonster.start();
}