var container = document.querySelector("#container");
var winnerText = document.createElement('h1');
var restart = document.createElement('BUTTON')
restart.id = "restart"
function init(containerNode) {
  var score1Node = createScore('score1');
  var score2Node = createScore('score2');
  containerNode.appendChild(winnerText);
  containerNode.appendChild(restart);

  containerNode.appendChild(score1Node);
  containerNode.appendChild(score2Node);

  containerNode.appendChild(createButton('player1', 'Add to player 1 score', score1Node));
  containerNode.appendChild(createButton('player2', 'Add to player 2 score', score2Node));

}

function createButton(id, text, scoreNode){
  var button = document.createElement("BUTTON");
  button.id = id;
  button.innerText = text;
  button.addEventListener('click', function() {
    scoreNode.innerText = parseInt(scoreNode.innerText) + 1;
    notifiesWinner(button, scoreNode);
  })
  return(button);
}

function clearScore(){
  var score1 = document.getElementById("score1");
  var score2 = document.getElementById("score2");
  var restart = document.getElementById("restart");
  restart.addEventListener('click', function(){
    score1.innerText = 0;
    score2.innerText = 0;
  })
}
clearScore();
function createScore(id) {
  var score = document.createElement("P");
  score.innerText = 0;
  score.id = id;

  return(score);
}

function notifiesWinner(button, score){
  if(button.id === "player1") {
    if (parseInt(score.innerHTML) >= 21) {
      winnerText.innerText = "Player 1 wins!";
  }
  }
  if(button.id === "player2") {
    if (parseInt(score.innerHTML) >= 21) {
      winnerText.innerText = "Player 2 wins!";
  }
  }

}
