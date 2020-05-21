//Your age in Days!
function ageInDays() {
    const birthyear = prompt("What year were you born in?");
    var ageinDayss = 0;
    for (let i = birthyear; i < 2020; i++) {
        if (i % 4 == 0){
            ageinDayss+=366
        }
        else{
            ageinDayss+=365
        }

    }
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ ageinDayss+ ' days old');
    h1.setAttribute('id','ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove()

}
//Cat Generator
function GenerateCat(){
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-box')
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image)

}

//Rock, Paper, Scissors
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log(humanChoice)
    botChoice = ["rock","paper","scissors"][Math.floor(Math.random()*3)];
    results = decideWinner(humanChoice, botChoice);
    console.log(humanChoice,botChoice);
    console.log(results)
    var resultsColor;
    if (results == "Draw"){
        console.log("1")
        resultsColor = "grey";
    }
    else if (results == "Human Wins!"){
        console.log("2")
        resultsColor = "green";
    }
    else{
        console.log("3")
        resultsColor="red";
    }
    console.log(resultsColor)
    
    rpsFrontEnd(yourChoice.id,botChoice,results, resultsColor);

}


function decideWinner(human,bot){
    if (human == bot){
        return("Draw")
    }

    if (human =="rock"){
        if(bot == "scissors"){
            return("Human Wins!")
        }
        else{
            return ("Bot Wins!" )
        }
    }
    if (human =="scissors"){
        if(bot == "paper"){
            return("Human Wins!")
        }
        else{
            return ("Bot Wins!")
        }
    }
    if (human =="paper"){
        if(bot == "rock"){
            return("Human Wins!")
        }
        else{
            return ("Bot Wins!")
        }
    }    
}

function rpsFrontEnd(humanImage,botImage, message, messageColor){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img id='humanChoice' src='" + imagesDatabase[humanImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    botDiv.innerHTML = "<img id='botChoice' src='" + imagesDatabase[botImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
    messageDiv.innerHTML = "<h1 id='message' style='color: " + messageColor + "; font-size: 60px; '>" + message + "</h1>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);


}

function reset(){
    document.getElementById('flex-box-rps-div').innerHTML = " "
    rock = "<img id ='rock' src='static/images/rock.png' alt='' onclick='rpsGame(this)'>"
    paper = "<img id='paper' src='static/images/paper.jpg' alt='' onclick='rpsGame(this)'>"
    scissors = "<img id='scissors' src='static/images/scissors.png' alt='' onclick='rpsGame(this)'>"

    document.getElementById('flex-box-rps-div').innerHTML = rock;
    document.getElementById('flex-box-rps-div').innerHTML += paper;
    document.getElementById('flex-box-rps-div').innerHTML += scissors;
    

}
