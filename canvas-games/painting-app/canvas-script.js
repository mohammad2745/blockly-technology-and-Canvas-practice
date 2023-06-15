window.onload = () => {

    // Definitions
    var canvas = document.getElementById('paint-canvas');
    var context = canvas.getContext('2d');
    var bounding = canvas.getBoundingClientRect();

    // Specifications
    let mouseX = 0;
    let mouseY = 0;
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    let isDrawing = false


    // Handle colors
    let colors = document.getElementsByClassName('colors')[0];
    colors.addEventListener('click', (event) => {
        context.strokeStyle = event.target.value;
    });

    // Handle brush
    let brushes = document.getElementsByClassName('brushes')[0];
    brushes.addEventListener('click', (event) => {
        context.lineWidth = event.target.value;
    });

    // Mouse down event
    canvas.addEventListener('mousedown', (event) => {
        setMouseCoordinates(event);
        isDrawing = true;

        // Start Drawing
        context.beginPath();
        context.moveTo(mouseX, mouseY);
    });

    // Mouse move event
    canvas.addEventListener('mousemove', (event) => {
        setMouseCoordinates(event);

        if (isDrawing) {
            context.lineTo(mouseX, mouseY);
            context.stroke();
        }
    });

    // Mouse up event
    canvas.addEventListener('mouseup', (event) => {
        setMouseCoordinates(event);
        isDrawing = false;
    });

    // Handle mouse coordinates
    function setMouseCoordinates(event) {
        mouseX = event.clientX - bounding.left;
        mouseY = event.clientY - bounding.top;
    }

    // Handle clear button
    let clearButton = document.getElementById('clear');

    clearButton.addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    //Handle save button
    let clearSave = document.getElementById('save');

    clearSave.addEventListener('click', () => {

        let imageName = prompt("Please enter image name");
        let canvasDataURL = canvas.toDataURL();
        let a = document.createElement('a');
        a.href = canvasDataURL;
        a.download = imageName || 'drawing';
        a.click();
    });
}