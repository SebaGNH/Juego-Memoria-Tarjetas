const CARDS = document.querySelectorAll(".card");

let matched = 0;
let card_one;
let card_two;
let disable_deck = false;


function flip_card ({target:clickedCard}){
    if (card_one !== clickedCard && !disable_deck) {
        clickedCard.classList.add("flip");
        if (!card_one) {
            return card_one = clickedCard;
        }
        card_two = clickedCard;
        disable_deck = true;
        let card_one_img = card_one.querySelector(".back-view img").src;
        let card_two_img = card_two.querySelector(".back-view img").src;
        match_Cards(card_one_img,card_two_img);
    }
}


function match_Cards (img1,img2){}