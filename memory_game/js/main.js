var cards = ["Queen","Queen","King","King"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

//console.log(cardsInPlay[1]);
if(cardsInPlay.length===2)
{
	if (cardsInPlay[0]===cardsInPlay[1]) 
	{
		alert("You found a match !");
	}
	alert("Sorry, Try again.");
}