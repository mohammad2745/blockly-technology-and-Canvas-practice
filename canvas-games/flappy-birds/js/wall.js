function wall(canvas) {
    let wall = this;

    // Global Attributes
    wall.canvas = canvas;
    wall.context = wall.canvas.getContext('2d');

    // Specifications
    wall.x = canvas.width;
    wall.y = 0;
    wall.w = 100;
    wall.h = 0;
    wall.gap = 0;
    wall.color = getRandomColor();
}

wall.prototype.draw = function() {
    let wall = this;

    // Draw upper part
    wall.context.fillRect(wall.x, wall.y, wall.w, wall.h);

}