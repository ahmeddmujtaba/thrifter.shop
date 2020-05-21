
const winningMessageElement = document.getElementById('winningMessage')
const message = document.getElementById('message');
var turn = 'X'


function startGame(cellChoice) {
    if (turn == 'X'){
        addX(cellChoice)
        turn = 'O'
    }
    if (turn == 'O'){
        addO(cellChoice)
        
    }
    
    checkWinner()
}

function addX(cellChoice) {
    if (cellChoice.getAttribute('data-cell') == 'False'){
        if (turn == 'X')
        {
    cellChoice.setAttribute('data-cell','X');
 //   console.log(cellChoice);
 //   console.log(cellChoice.className);
 //   console.log(typeof cellChoice);
 //   console.log(cellChoice.id);
 //   console.log(cellChoice.getAttribute('data-cell'));
    var cell = document.getElementById(cellChoice.id);
    var image = document.createElement('img');
    image.src = 'static/images/x.png';
    cell.appendChild(image);
    turn = 'O'
    }
}
}



function addO(cellChoice) {
    if (cellChoice.getAttribute('data-cell') == 'False'){
        if (turn == 'O') {
    cellChoice.setAttribute('data-cell','O');
 //   console.log(cellChoice.className);
 //   console.log(typeof cellChoice);
 //   console.log(cellChoice.id);
 //   console.log(cellChoice.getAttribute('data-cell'));
    var cell = document.getElementById(cellChoice.id);
    var image = document.createElement('img');
    image.src = 'static/images/o.png';
    cell.appendChild(image);
    turn = 'X';
    }
}
}
var xCheck = []
var oCheck = []
function checkWinner() {
    for (let i = 1; i < 10; i++) {
        
        var check = document.getElementById(i).getAttribute('data-cell');
        if (check == 'X') {
            xCheck += [i]
        }

        if (check == 'O') {
            oCheck += [i]
        }

        

      //  console.log("check",check);
 }
    winner = false;
    xWinCheck();
    oWinCheck();
    drawCheck();
}
if(winner = false){
    console.log('Draw');
}


function xWinCheck(){

    for (let i = 0;i < 8; i++){
        var xwinner = []
    if (xCheck.includes((win[i][0]).toString())){
        xwinner += [1]
    }
    if (xCheck.includes((win[i][1]).toString())){
        xwinner += [1]
    }
    if (xCheck.includes((win[i][2]).toString())){
        xwinner += [1]
    }
   // console.log("check:",winner)

    if (xwinner.length == 3){
        console.log("X IS A WINNER")
        winner = true;
        message.innerText = 'X Wins';
        winningMessageElement.classList.add('show')
        xwinner = []
        owinner= []
        oCheck = []
        xwinner = []
        xCheck = []
        turn = 'X'


    }

    }
}

function oWinCheck(){

    for (let i = 0;i < 8; i++){
        var owinner = []
    if (oCheck.includes((win[i][0]).toString())){
        owinner += [1]
    }
    if (oCheck.includes((win[i][1]).toString())){
        owinner += [1]
    }
    if (oCheck.includes((win[i][2]).toString())){
        owinner += [1]
    }
   // console.log("check:",winner)

    if (owinner.length == 3){
        console.log("O IS A WINNER")
        message.innerText = 'O Wins';
        winningMessageElement.classList.add('show')
        winner = true;
        owinner= []
        oCheck = []
        xwinner = []
        xCheck = []
        turn = 'X'

    }

    }

}

function drawCheck(){
    draw = []
    for (let i = 1;i <10; i++ ){
        if (document.getElementById(i).getAttribute('data-cell') != 'False'){
            draw += [1]
            //console.log(i,document.getElementById(i).getAttribute('data-cell'))

        }
    }
    if (draw.length == 9){
        console.log('DRAW');
        message.innerText = 'Draw';
        winningMessageElement.classList.add('show')
        owinner= []
        oCheck = []
        xwinner = []
        xCheck = []
        turn = 'X'

    }
}

win = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]
]

function Restart(){
    winningMessageElement.classList.remove('show');
    for (let i = 1; i < 10; i++){
        document.getElementById(i).setAttribute('data-cell','False');
        document.getElementById(i).innerHTML = "";
    }



}