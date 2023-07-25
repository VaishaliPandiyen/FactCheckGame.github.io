let card1 = document.querySelector(".card_1");
let sec1 = document.querySelector(".sec_1");
let sec2 = document.querySelector(".sec_2");
let sec3 = document.querySelector(".sec_3");

sec1.addEventListener("click", () => {
  sec1.style.display = "None";
  // sec2.style.display = "Flex";
  sec3.style.display = "Flex";
  // setTimeout(() => (sec3.style.opacity = "1"), 5000);
  sec3.style.opacity = "1"
});

let click_texts = document.querySelectorAll(".click_text");

let clue_card = document.querySelector(".clue_card");
let clue_title = clue_card.querySelector(".click_text");
let clues = document.querySelector(".clues");

let src_card = document.querySelector(".src_card");
let src_title = src_card.querySelector(".click_text");
let srcs = document.querySelector(".sources");

let slant = document.querySelector(".slant_border");

let card3_click1_basics = () => {
  for (let c of click_texts) {
    c.style.position = "relative";
    c.style.opacity = "0";
  }
  slant.style.transition = "left 2s ease, opacity 2s ease";
  slant.style.opacity = "0";
};

// To achieve the sliding out effect, you should set the left and opacity properties first and then change the display property. 

function handleClueCardClick(card) {
  card3_click1_basics();
  clue_title.style.transition = "left 2s ease, opacity 1s ease";
  clue_title.style.left = "-100%";
  clue_title.style.opacity = "0";
  setTimeout(() => {
    slant.style.display = "none"; 
  }, 3000);

  // Use a small delay to apply the opacity transition after changing the display property
  setTimeout(() => {
    clues.style.display = "flex";
    clue_title.style.display = "none"; // Set "none" in lowercase
    clues.style.transition = "opacity 3s ease";
    clues.style.opacity = "1";
  }, 1500);
  slant.style.left = "-10%";
  clue_card.style.width = "760px";
}

/*

CLUES CAROUSEL

*/

let currentIndex = 0;
const texts = document.querySelectorAll(".clue");

function showClue(index) {
  texts.forEach((text, i) => {
    if (i === index) {
      text.classList.add("active");
    } else {
      text.classList.remove("active");
    }
  });
}

function showNextClue() {
  currentIndex = (currentIndex + 1) % texts.length;
  showClue(currentIndex);
}

function showPreviousClue() {
  currentIndex = (currentIndex - 1 + texts.length) % texts.length;
  showClue(currentIndex);
}
