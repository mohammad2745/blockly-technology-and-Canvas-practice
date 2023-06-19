let INITIAL = 1;
let GAME_PLAYING = 2;
let GAME_OVER = 3;

let KEY_CODE = {
    R: 82
};

function FlappyMonster(canvas) {
    let game = this;

    game.canvas = canvas;
    game.context = game.canvas.getContext('2d');

    // Game state
    game.currentState = INITIAL;

    // Game speed
    game.velocity = 5;

    // Bind Events
    game.blindEvents();

    // Create game objects
    game.createObjects();
}

FlappyMonster.prototype.createObjects = function() {
    let game = this;

    //Background
    game.background1 = new GameBackground('images/back.png', game.canvas);
    game.background2 = new GameBackground('images/back.png', game.canvas);
    game.background2.x = game.canvas.width;

    // Score
    game.gameScore = new GameScore(game.canvas);
    game.gameScore.x = game.canvas.width - 150;
    game.gameScore.y = 80;
};

FlappyMonster.prototype.blindEvents = function() {
    let game = this;

    // Mouse listener
    game.canvas.addEventListener('click', function(event) {
        switch (game.currentState) {
            case INITIAL:
                game.currentState = GAME_PLAYING;
                break;
            case GAME_PLAYING:

                break;
        }
    });

    // Key listener
    window.addEventListener('keydown', function(event) {
        switch (game.currentState) {
            case GAME_OVER:
                if (event.keyCode === KEY_CODE.R) {
                    game.currentState = GAME_PLAYING;
                }
                break;
        }
    });

}

FlappyMonster.prototype.start = function() {
    let game = this;

    // Start game
    window.requestAnimationFrame(function() {
        game.runGameLoop();
    });
};

FlappyMonster.prototype.runGameLoop = function() {
    let game = this;

    // Game state
    switch (game.currentState) {
        case INITIAL:
            // Draw initial screen
            game.drawInitialScreen();
            break;
        case GAME_PLAYING:
            // Draw game playing screen
            game.drawGamePlayingScreen();
            break;
        case GAME_OVER:
            // Draw game over screen
            game.drawGameOverScreen();
            break;
        default:
            break;
    }

    window.requestAnimationFrame(function() {
        game.runGameLoop();
    });
};

FlappyMonster.prototype.drawInitialScreen = function() {
    let game = this;

    // Draw

    // Background
    game.context.fillStyle = 'black';
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    //Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Arial';
    game.context.fillText('Click To Start', game.canvas.width / 2 - 100, game.canvas.height / 2);
};

FlappyMonster.prototype.drawGamePlayingScreen = function() {
    let game = this;

    //Clear canvas
    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);

    // Background
    game.animateBackground();

    // Draw score
    game.gameScore.draw();
};

FlappyMonster.prototype.animateBackground = function() {
    let game = this;

    game.background1.draw();

    if (Math.abs(game.background1.x) > game.canvas.width) {
        game.background1.x = game.canvas.width - game.velocity;
    }
    game.background1.x -= game.velocity;


    game.background2.draw();
    if (Math.abs(game.background2.x) > game.canvas.width) {
        game.background2.x = game.canvas.width - game.velocity;
    }
    game.background2.x -= game.velocity;
}

FlappyMonster.prototype.drawGameOverScreen = function() {
    let game = this;

    // Draw

    // Background
    game.context.fillStyle = 'black';
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    //Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Arial';
    game.context.fillText('Game Over :(', game.canvas.width / 2 - 100, game.canvas.height / 2);
    game.context.font = '24px Arial';
    game.context.fillText('Press R to Restart', game.canvas.width / 2 - 100, game.canvas.height / 2 + 50);
};