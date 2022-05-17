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


function match_Cards (img1,img2){
    if (img1 === img2) {
        matched ++;
        if (matched == 8) {
            setTimeout(() => {
                return shufle_card();
            },1000);
        }
        card_one.removeEventListener("click",flip_card);
        card_two.removeEventListener("click",flip_card);
        card_one = card_two = "";
        return disable_deck = false;
    }
    setTimeout(()=>{
        card_one.classList.add("shake");
        card_two.classList.add("shake");
    },400);
    setTimeout(()=>{
        card_one.classList.remove("shake","flip");
        card_two.classList.remove("shake","flip");
        card_one = card_two = "";
        disable_deck = false;
    },1200);
}

function shuffle_card(){
    matched = 0;
    disable_deck = false;
    card_one = card_two = "";
    let arr_num = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr_num.sort((card, i)=>{
        card.classList.remove("flip");
        let img_tag = card.querySelector(".back-view img");
        img_tag.src = `img/img-${arr_num[i]}.png`;
        card.addEventListener("click",flip_card);
    });
}