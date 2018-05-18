

var cards = ["queen", "queen", "king" , "king"];
var cardsInPlay = [];

var checkForMatch = function () {

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert( " You found a match ");
	} else {
		alert("Sorry, try again");
	}
};
  if (cardsInPlay.length ===2) {
 	checkforMatch();
 };

 
var flipCard = function(cardId) {
       console.log("User flipped " + cards[cardsId]);
       cardsInPlay.push(cards[cardId]);
  };

flipCard(0);
flipCard(2);

