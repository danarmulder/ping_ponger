describe('ping ponger', function() {
  var container;
  beforeEach(function() {
     container = document.querySelector("#jasmine_content");
    init(container);
  });

  afterEach(function() {
    container.innerHTML = "";
  });

  it('increments the score when the button is clicked', function() {

    var scoreNode = document.querySelector('#score1');
    var buttonNode = document.querySelector('#player1');

    expect(scoreNode.innerText).toEqual('0');

    buttonNode.click();

    expect(scoreNode.innerText).toEqual('1');
  });

  it('increments player 2 score when player 2 button is clicked', function() {
    var scoreNode2 = document.querySelector('#score2');
    var buttonNode2 = document.querySelector('#player2');

    expect(scoreNode2.innerText).toEqual('0');

    buttonNode2.click();

    expect(scoreNode2.innerText).toEqual('1');
  });

  it('player is notified they won when they reach a score of 21', function(){
    var score = document.querySelector('#score2');
    var button = document.querySelector('#player2');

    for (var i=0; i < 21; i++){
      button.click();
    };

    var h1Node = document.querySelector('h1');

    expect(score.innerText).toEqual('21');
    expect(h1Node.innerText).toEqual("Player 2 wins!");
 });

  it('button restarts game and resets score to zero', function(){
    var button = document.querySelector('#restart');
    var score1 = document.querySelector('#score1');
    var score2 = document.querySelector('#score2');

    button.click();

    expect(score1.innerText).toEqual('0');
    expect(score2.innerText).toEqual('0');

  });

 });
