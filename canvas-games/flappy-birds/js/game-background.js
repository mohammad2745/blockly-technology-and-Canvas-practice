function GameBackground(src, canvas) {
    let bg = this;

    // Global attribute
    bg.canvas = canvas;
    bg.context = bg.canvas.getContext('2d');

    // Specifications
    bg.x = 0;
    bg.y = 0;
    bg.w = bg.canvas.width;
    bg.h = bg.canvas.height;
    bg.src = src;
    bg.img = null;

    // Create background image
    bg.create();
}

GameBackground.prototype.create = function() {
    let bg = this;

    // create image 
    bg.img = new Image();
    bg.img.src = bg.src;
};

GameBackground.prototype.draw = function() {
    let bg = this;

    if (bg.img != null) {
        bg.context.drawImage(bg.img, bg.x, bg.y, bg.w, bg.h);
    }
}