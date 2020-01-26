var canvas = document.getElementById("canvasGame");
var canvasContext = canvas.getContext('2d');

drawBoard();

/*
var X = document.getElementById('X');
var O = document.getElementById('O');
canvasContext.drawImage(X, 200, 200);
*/


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


//creating a board object. If the region is empty then it's value will be null, if it stores O --> value = 0, if X --> value = 1
var board = {
    box1: null,
    box2: null,
    box3: 0,
    box4: null,
    box5: 1,
    box6: null,
    box7: null,
    box8: null,
    box9: null,
    drawBoard: function(){
        //draws the X's and the O's


    }
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