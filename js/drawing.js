enableDrawing();
growBoxes();

function enableDrawing() {
    // holds all of your browser JavaScript code
    console.dir(window);

    // hold all of your browser HTML code 
    console.dir(document);

    document.addEventListener('mousedown', function(e) {
        var red = Math.round(Math.random()*255);
        var green = Math.round(Math.random()*255);
        var blue = Math.round(Math.random()*255);
        var box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.top = e.clientY + 'px';
        box.style.left = e.clientX + 'px';
        box.style.width = '10px';
        box.style.height = '10px';

        // RGB is not JS just CSS - putting it in quotes tells JS that its CSS
        box.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue +')';
        box.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue +')';
        document.body.appendChild(box);
    });
}
function growBoxes() {
    document.addEventListener('mousedown', function(e) {
        if (e.target.nodeName === 'DIV') {
            e.target.style.width = '15px';
            e.target.style.height = '15px';  
        }
    });
}