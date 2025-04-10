
const suits = ["♦",  "♥",  "♠",  "♣"]
const value = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


function getRandomCard () {
    const randomSuits = suits[Math.floor(Math.random() * suits.length)];
    const randomValues = value[Math.floor(Math.random() * value.length)];
    return {suit: randomSuits, value: randomValues};
};

function updateCard () {
    const {suit, value} = getRandomCard();


    const topLeftSuit = document.querySelector(".top-left-suit")
    const rightBottomSuit = document.querySelector(".bottom-right-suit")
    const cardValue = document.querySelector(".card-value")

    topLeftSuit.textContent= suit
    rightBottomSuit.textContent= suit
    cardValue.textContent=value

    const isRed = (suit === "♥" || suit === "♦")
    const color = isRed ? "red" : "black" 

    topLeftSuit.style.color= color
    rightBottomSuit.style.color= color
    cardValue.style.color= color
};

window.onload = () => {
    updateCard();
    
    document.getElementById("update-button").addEventListener("click", updateCard);
}

