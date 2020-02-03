var canvas, canvasContext;
var finished = false;


window.onload = function(){
    canvas = document.getElementById("canvasGame");
    canvasContext = canvas.getContext('2d');
    var counter = 0;
    drawBoard();

    canvas.addEventListener('mousedown', function(evt){
        if(!finished){
            var rect = canvas.getBoundingClientRect();
            var root = document.documentElement;
            var mouseX = evt.clientX - rect.left - root.scrollLeft;
            var mouseY = evt.clientY - rect.top - root.scrollTop;
    
            //converting x, y coordinates to the boxNumber
            var j = Math.floor(mouseX/(canvas.width/3));
            var i = Math.floor(mouseY/(canvas.height/3));
            var boxNumber = 3*i+j;
    
            if(board.boxes[boxNumber] === null){
                if(counter%2 === 0){
                    board.boxes[boxNumber] = 'X';
                }else{
                    board.boxes[boxNumber] = 'O';
                }
                board.drawSymbols();
                counter++;
                checkIfSomebodyWon();
            }           
        }else{
            //reset the game
            finished = false;
            
        }
    });

};

function checkIfSomebodyWon(){

    //3 X's or O's in the row
    if(threeBoxesAreEqual(0, 1, 2)){
        drawLine(0, 2);
    } else if(threeBoxesAreEqual(3, 4, 5)){
        drawLine(3, 5);
    } else if(threeBoxesAreEqual(6, 7, 8)){
        drawLine(6, 8);
    }
    //3 X's or O's in the column
    if(threeBoxesAreEqual(0, 3, 6)){
        drawLine(0, 6);
    } else if(threeBoxesAreEqual(1, 4, 7)){
        drawLine(1, 7);
    } else if(threeBoxesAreEqual(2, 5, 8)){
        drawLine(2, 8);
    }
    //3 X's or O's diagonally
    if(threeBoxesAreEqual(0, 4, 8)){
        drawLine(0, 8);
    } else if(threeBoxesAreEqual(2, 4, 6)){
        drawLine(2, 6);
    }

    function threeBoxesAreEqual(a, b, c){
        if(board.boxes[a]!==null && board.boxes[a] === board.boxes[b] && board.boxes[b] === board.boxes[c]){
            return true;
        }else{
            return false;
        }
    }

    function drawLine(a, b){

        finished = true;

        //draws a victory line from a to b
        canvasContext.beginPath();
        canvasContext.lineWidth = 15;
        canvasContext.strokeStyle = 'green';


        canvasContext.moveTo(getXY(a).x, getXY(a).y);
        canvasContext.lineTo(getXY(b).x, getXY(b).y);
        canvasContext.stroke();
        canvasContext.closePath();

        function getXY(a){
            //find the x and y canvas coordinates of the middle point of the box a

            var i = Math.floor(a/3);
            var j = a % 3;

            var dx = canvas.width/3/2;
            var dy = canvas.height/3/2;

            var x = j * canvas.width/3 + dx;
            var y = i * canvas.height/3 + dy;

            return{
                x, y
            }


        }
    }

}

function drawBoard(){
    //draws the outer border
    canvasContext.strokeStyle = 'black';
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

    boxes : [null, null, null, null, null, null, null, null, null],

    drawSymbols: function(){
       for( i=0; i < 9; i++){
            if(this.boxes[i] != null){
                drawSymbol(this.boxes[i], i);
            }
       }
    }
}

function drawSymbol(symbol, boxNumber){
        // draw symbol example

        var symbol = document.getElementById(symbol);
        var pictureWidth = canvas.width/4;
        var pictureHeight = canvas.height/4;
        var dx = (canvas.width/3 - pictureWidth)/2;
        var dy = (canvas.height/3 - pictureHeight)/2;
        var i = Math.floor(boxNumber/3);
        var j = boxNumber%3;
        canvasContext.drawImage(symbol, j*canvas.width/3+dx , i*canvas.height/3+dy, pictureWidth, pictureHeight);

}


