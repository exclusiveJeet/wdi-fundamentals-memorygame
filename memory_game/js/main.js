var cards = ["Queen","Queen","King","King"];
var cardsInPlay = [];


var checkForMatch = function()
{

	if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else 
		{
		alert("Sorry, try again.");
		}
}

var flipCard = function(cardID)
{

	console.log("User flipped " + cards[cardID]);
	cardsInPlay = cards[cardID];
	checkForMatch();
}

flipCard(0);
flipCard(2);
