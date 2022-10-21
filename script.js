const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  let cardOne = null;
  let cardTwo = null;
  const clickedCard = event.target;
  const flippedCards = 0;
  clickedCard.style.backgroundColor = clickedCard.classList[0];

  if (event.target.classList.contains("flipped")) return;
  if (cardOne.clasName === cardTwo.className) return;
  if (!cardOne || !cardTwo) {
    clickedCard.classList.add("flipped");
    cardOne = cardOne || clickedCard;
    cardTwo = clickedCard === cardOne ? null : clickedCard;
  }

  if (cardOne && cardTwo) {
    let noClick = true;
    let firstCard = cardOne.className;
    let secondCard = cardTwo.className;

    if (firstCard === secondCard) {
      flippedCards += 2;
      cardOne.removeEventListenter('click', handleCardClick);
      cardTwo.removeEventListenter('click', handleCardClick);
      cardOne = null;
      cardTwo = null;
      noClick = false;
    } else {
      setTimeout(function () {
        cardOne.style.backgroundColor = "";
        cardTwo.style.backgroundColor = "";
        cardOne.classList.remove("flipped");
        cardTwo.classList.remove("flipped");
        cardOne = null;
        cardTwo = null;
        noClick = false;
      }, 1000);
    }
  }
  if (flippedCards === COLORS.length) {
    const newDiv = document.createElement("div");
    newDiv.innerText = "GAME OVER!";
    newDiv.className = "game-over";
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */