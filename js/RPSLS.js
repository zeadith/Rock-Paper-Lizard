//rules of the game
alert("Let's play! Scissors cut paper, paper covers rock, rock crushes lizard, lizard poisons spock, spock smashes scissors, scissors decapitate lizard, lizard eats paper, paper disproves spock, spock vaporises rock, rock crushes scissors. Are you ready?");

function checkUsersChoice(){
    //user chooses, checks if correctly written
  var userChoice = prompt("Do you choose rock, paper,  scissors, lizard or spock?");
  if (userChoice === 'rock' || userChoice ==='paper' || userChoice === 'scissors' || userChoice === 'lizard' || userChoice === 'spock'){
    return userChoice;
  }
  else{ // ask again
    return checkUsersChoice();
  }
  //a jak ktoś kliknie anuluj to co?
}

function chooseComputersChoice (){
//randomly chosen computers choice
  var computerChoice = Math.random(); 
  if (computerChoice < 0.20) {
	    computerChoice = "rock";
  }
  else if(computerChoice < 0.40) {
	    computerChoice = "paper";
  }
  else if (computerChoice < 0.60) {
	    computerChoice = "scissors";
  }
  else if (computerChoice < 0.80) {
        computerChoice = "lizard";
  }
  else {
        computerChoice = 'spock';
  }
  return computerChoice;
}

function theGame (userChoice, computerChoice) {
var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
var count = choices.indexOf(userChoice);

var game = [ /*rock wins with*/['lizard', 'scissors'], 
/*paper wins with*/['rock', 'spock'], 
/*scissors win with*/['paper', 'lizard'], 
/*lizard wins with*/['spock', 'paper'], 
/*spock wins with*/['rock', 'scissors']];

  var result = ['You win!', 'Computer wins!', 'It is a tie!'];
  if (userChoice===computerChoice){
      return result[2];
  }
  if (game[count][0]== computerChoice){
    return result[0];
  }
    if (game[count][1]== computerChoice){
    return result[0];
  }
  /*
  for (var i =0; i< 2; i++){
    if (game[count][i] == computerChoice){
      return result[0];
    }*/
  return result[1];
  
}

//wyswietlanie dziala
var userChoice = checkUsersChoice();
console.log ('You: ' + userChoice);

var computerChoice = chooseComputersChoice(); 
console.log("Computer: " + computerChoice);

var end = theGame (userChoice, computerChoice);
console.log(end);

//bylo 109 linii i masa switchow :o

