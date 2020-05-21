
const winningMessageElement = document.getElementById('winningMessage')
const message = document.getElementById('message');
const  one = document.getElementById('1')
const  two = document.getElementById('2')
const  three = document.getElementById('3')
const  four = document.getElementById('4')
const  five = document.getElementById('5')
const  six = document.getElementById('6')
const  seven = document.getElementById('7')
const  eight = document.getElementById('8')
const  nine = document.getElementById('9')
var turnnumber = 0
var start = false
const startButton = document.getElementById("startButton");

var xCheck = []
var oCheck = []

function Start(button) {

    five.setAttribute('data-cell', 'X');
    var image = document.createElement('img');
    image.src = 'static/images/x.png';
    five.appendChild(image);
    button.classList.add('hidden')
    turnnumber += 1
    start = true
    
}


function addO(cellChoice) {
    if (cellChoice.getAttribute('data-cell') == 'False' && start == true){
        console.log(start)
    cellChoice.setAttribute('data-cell','O');
 //   console.log(cellChoice.className);
 //   console.log(typeof cellChoice);
 //   console.log(cellChoice.id);
 //   console.log(cellChoice.getAttribute('data-cell'));
    var cell = document.getElementById(cellChoice.id);
    var image = document.createElement('img');
    image.src = 'static/images/o.png';
    cell.appendChild(image);
    checkWinner();
    decideX(cellChoice);
    turnnumber+=1;
    
    
    }
}

function decideX(cellChoice) {
    if (start == true) {
    if (turnnumber == 1){
        if (cellisO([eight]) || cellisO([four]) || cellisO([six]) || cellisO([two])){
            addX(one)
            checkWinner()
        }}
    console.log(turnnumber)
    if (turnnumber == 2){
        console.log(cellisX([one]), cellisO([eight,nine]))
        if (cellisX([one]) && cellisO([nine,eight])){
            addX(seven)
            checkWinner()
        }
        else{
            addX(nine);
        }
    }
    if (turnnumber == 3){
        if (cellisO([four,eight,nine])) {
            addX(three)
            checkWinner()
        }
        else {
            if(start){
            addX(four)
            checkWinner()
        }}
    }
    if (turnnumber == 2){
        if (cellisX([one]) && cellisO([four,nine])){
            addX(three)
            
        }
        else{
            addX(nine);
        }
    }
    if (turnnumber == 3){
        if (cellisO([seven,four,nine])) {
            addX(two)
            checkWinner()
        }
        else {
            if(start){
            addX(seven)
            checkWinner()
        }}
    }
    if (turnnumber == 2){
        if (cellisX([one]) && cellisO([six,nine])){
            addX(three)
            
        }
        else{
            addX(nine);
        }
    }
    if (turnnumber == 3){
        if (cellisO([six,nine,seven])) {
            addX(two)
            checkWinner()
        }
        else {
            if(start){
            addX(seven)
            checkWinner()
        }}
    }

    if (turnnumber == 2){
        if (cellisX([one]) && cellisO([two,nine])){
            addX(seven)
            
        }
        else{
            addX(nine);
        }
    }
    if (turnnumber == 3){
        if (cellisO([two,nine,four])) {
            addX(three)
            checkWinner()
        }
        else {
            if(start){
             
            console.log("myfault3")
            addX(two)
            checkWinner()
        }}
    }






    

}}

function cellisX(list){
    for (i = 0; i < list.length;i++){
        console.log(list[i])
        if (list[i].getAttribute('data-cell') != 'X'){
            return(false);
        }

    }
    return true;
}

function cellisO(list){
    for (i = 0; i < list.length;i++){
        console.log(list[i])
        if (list[i].getAttribute('data-cell') != 'O'){
            return false ;
        }

    }
    return true;
}

function addX(cellChoice) {
    if (cellChoice.getAttribute('data-cell') == 'False'){
    console.log("yes")
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
    checkWinner()
    }
}









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
        start= false;
        


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
        owinner= [];
        oCheck = [];
        xwinner = [];
        xCheck = [];
        start = false;
        

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
        start = false;
        

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
    turnnumber = 0
    winningMessageElement.classList.remove('show');
    for (let i = 1; i < 10; i++){
        document.getElementById(i).setAttribute('data-cell','False');
        document.getElementById(i).innerHTML = "";
    }
    startButton.classList.remove('hidden');

    start = false;
    




}