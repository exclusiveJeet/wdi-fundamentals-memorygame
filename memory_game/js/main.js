var cards = [
			  	{
			  	rank : "Queen" ,
			    suit : "Hearts",
			    cardImage : "images/queen-of-hearts.png"
				},

				{
			  	rank : "Queen" ,
			    suit : "Diamonds",
			    cardImage : "images/queen-of-diamonds.png"
				},

				{
			  	rank : "King" ,
			    suit : "Hearts",
			    cardImage : "images/king-of-hearts.png"
				},

				{
			  	rank : "King" ,
			    suit : "Diamonds",
			    cardImage : "images/king-of-diamonds.png"
				}
			];
var cardsInPlay = [];


var checkForMatch = function()
{
	var length = cardsInPlay.length;
	console.log("Length "+length);
  if(cardsInPlay.length >= 3)
  {
	if (cardsInPlay[0] === cardsInPlay[1])
		{
			alert("You found a match!");
			location.reload(true);
		}
	else
		{
			alert("Sorry! Try Again");
			location.reload(true);
			//document.getElementById("Id",cId).setAttribute("src","images/back.png");
		}
	}

	
}

var flipCard = function()
{
	var cardID = this.getAttribute("id");
		console.log(cardID);
	

	cardsInPlay.push(cards[cardID].rank);

	this.setAttribute("src",cards[cardID].cardImage);
	checkForMatch();
}


//Creating a random board

var creatBoard = function(){

	var cardElement;
	for(var i=0; i<cards.length; i++)
	{
		cardElement = document.createElement('img');
		console.log(cardElement);
		cardElement.setAttribute("src", "images/back.png");
		cardElement.addEventListener("click", flipCard);
		cardElement.setAttribute("id",i);
		document.getElementById("game-board").appendChild(cardElement);

	}

}

creatBoard();










