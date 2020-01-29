var canvas = document.getElementById("canvasGame");
var canvasContext = canvas.getContext('2d');

window.onload = function(){
    drawBoard();

};

function drawBoard(){
    //draws the outer border
    canvasContext.stokeStyle = 'black';
    canvasContext.lineWidth = 15;
    canvasContext.strokeRect(0,0, canvas.width, canvas.height);

    //draws 2 inner horizontal and vertical lines
    canvasContext.beginPath();
    canvasContext.lineWidth = 2;
    canvasContext.moveTo(canvas.width/3, 0);
    canvasContext.lineTo(canvas.width/3, canvas.height);
    canvasContext.moveTo(2*canvas.width/3, 0);
    canvasContext.lineTo(2*canvas.width/3, canvas.height);
    canvasContext.moveTo(0, canvas.height/3);
    canvasContext.lineTo(canvas.width, canvas.height/3);
    canvasContext.moveTo(0, 2*canvas.height/3);
    canvasContext.lineTo(canvas.width, 2*canvas.height/3);
    canvasContext.stroke();
}


//creating a board object. If the region is empty then it's value will be null
var board = {

    boxes : [null, null, 'O', null, 'X', null, null, null, null],

    drawBoard: function(){
       for( i=0; i < 9; i++){
            if(this.boxes[i] != null){
                drawSymbol(boxes[i], i);
            }
       }
    }
}

function drawSymbol(symbol, boxNumber){
        // draw symbol example

        var X = document.getElementById('X');
        var O = document.getElementById('O');
        var pictureWidth = canvas.width/4;
        var pictureHeight = canvas.height/4;
        var dx = (canvas.width/3 - pictureWidth)/2;
        var dy = (canvas.height/3 - pictureHeight)/2;
        canvasContext.drawImage(O, 2*canvas.width/3+dx , 2*canvas.height/3+dy, pictureWidth, pictureHeight);

}

/*
canvas.addEventListener('mousedown', function(evt){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
});
*/