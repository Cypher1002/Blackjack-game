
let player={
    name:"abc",
    chips:123
}

let cards = [] //orderd list of items
let sum = 0
let hasBlackjack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl =  document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl =  documnet.getElementById("player-el")


playerEl.textContent= player.name+ ":$" + player.chips
function getRandomCard(){    
   let randomNumber=  Math.floor(Math.random()*13)+1
   if(randomNumber>10){
       return 10;
   } else if(randomNumber===11){
       return 11;
   }else{
       return randomNumber
    }

}
function startGame() {
    
    isAlive =true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    rendergame()
}


function rendergame() {
    cardsEl.textContent = "cards: "
     for(let i=0 ;i<cards.length;i++){
       cardsEl.textContent += cards[i]+" "
     }


    sumEl.textContent = "sum:" + sum
    if (sum <= 20) {
        message = "do you want to draw a new card?"
    } else if (sum === 21) {
        message = "wohoo!!! you got blackjack"
        hasBlackjack = true
    }
    else {
        message = "sorry! you are out of the game!!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {

    if(isAlive===true && hasBlackjack===false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()
    }
}

//cash out



