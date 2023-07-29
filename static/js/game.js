/* 

ON GAME LOAD

*/

let sec1 = document.querySelector(".sec_1");
let sec2 = document.querySelector(".sec_2");
let sec3 = document.querySelector(".sec_3");
let sec2n3 = document.querySelector(".sec_2_and_3");
let sec4 = document.querySelector(".sec_4");

/*
// sec1.addEventListener("click", () => {
//   sec1.style.display = "None";
//   sec2.style.display = "Flex";
//   sec3.style.display = "Flex";
//   setTimeout(() => (sec3.style.opacity = "1"), 5000);
//   // sec3.style.opacity = "1";
// });
*/
const gameLoad = () => {
  sec1.style.opacity = "1";
  sec1.style.transition = "opacity 1s ease";

  setTimeout(() => {
    sec1.style.opacity = "0";
    setTimeout(() => {
      sec1.style.display = "None";
    }, 1000);
  }, 2000);
  setTimeout(() => {
    sec2.style.display = "Flex";
    setTimeout(() => (sec2.style.opacity = "1"), 500);
  }, 3000);
  setTimeout(() => {
    sec2n3.style.top = "25.5%";
    sec3.style.display = "Flex";
    sec3.style.transform = "scale(0.8)";
    setTimeout(() => (sec3.style.opacity = "0.5"), 1000);

    sec2.addEventListener("mouseenter", () => {
      sec2n3.style.top = "25.5%";
      sec3.style.transform = "scale(0.8)";
      sec2.style.transform = "scale(1)";
      sec3.style.opacity = "0.5";
      sec2.style.opacity = "1";
    });
    sec3.addEventListener("mouseenter", () => {
      sec2n3.style.top = "-18%";
      sec3.style.transform = "scale(1)";
      sec2.style.transform = "scale(0.8)";
      sec2.style.opacity = "0.5";
      sec3.style.opacity = "1";
    });
  }, 4000);
};

gameLoad();

/*
-----------------------------------------------------
*/

/*

CLICK TO SHOW CLUES AND SOURCES

*/
let click_texts = document.querySelectorAll(".click_text");

let clue_card = document.querySelector(".clue_card");
let clue_title = clue_card.querySelector(".click_text");
let clues = document.querySelector(".clues");

let card3 = document.querySelector(".card_3");

// let src_card = document.querySelector(".src_card");
// let src_title = src_card.querySelector(".click_text");
// let srcs = document.querySelector(".sources");

// let slant = document.querySelector(".slant_border");

/* 

CLICKING CLUE(S)

*/

let card3_click1_basics = () => {
  clue_title.opacity = "0";
};

const handleClueCardClick = (card) => {
  card3_click1_basics();

  card3.style.height = "150px";
  card3.style.width = "760px";
  clue_title.style.transition = "left 2s ease, opacity 1s ease";
  clue_title.style.left = "-100%";
  clue_title.style.opacity = "0";

  setTimeout(() => {
    clues.style.display = "flex";
  }, 1000);
  setTimeout(() => {
    clue_title.style.display = "none";
    clues.style.transition = "opacity 2s ease";
    clues.style.opacity = "1";
  }, 1500);

  setTimeout(() => {
    clue_card.style.width = "760px";
  }, 2000);
};

/*

CLUES CAROUSEL

*/

let currentIndex_1 = 0;
const clue = document.querySelectorAll(".clue");
const clue_navs = document.querySelectorAll(".nav_clue");

const showClue = (index) => {
  clue.forEach((clue, i) => {
    if (i === index) {
      clue.classList.add("active");
    } else {
      clue.classList.remove("active");
    }
  });
};

const showNextClue = () => {
  if (currentIndex_1 < clue.length - 1) {
    currentIndex_1++;
    showClue(currentIndex_1);
  }
};

const showPreviousClue = () => {
  if (currentIndex_1 > 0) {
    currentIndex_1--;
    showClue(currentIndex_1);
  }
};

/*
-----------------------------------------------------
*/

/*

VERDICT

*/

let emoji = document.getElementById("emoji");
let verdict = document.getElementById("verdict");
let verdict_title = document.getElementById("verdict_title");
let verdict_content = document.getElementById("verdict_content");
let end_action = document.getElementById("end_action");

const showVerdict = (verdict, v) => {
  sec2n3.style.opacity = "0";
  emoji.setAttribute("src", v ? "../img/sunglass.png" : "../img/what.png");
  verdict_title.innerHTML = v ? "That's right" : "You missed that!";

  setTimeout(() => {
    sec2n3.style.display = "none";
    sec4.style.display = "flex";
    setTimeout(() => (emoji.style.transform = "scale(0.5)"), 100);
  }, 2000);
  setTimeout(() => (emoji.style.transform = "scale(0.2)"), 3000);

  setTimeout(() => {
    const { style } = verdict;
    style.background = v ? "yellowgreen" : "orangered";
    style.border = v ? "3px solid green" : "5px solid red";
    verdict_content.style.opacity = "1";
    end_action.style.opacity = "1";
  }, 5000);
};

const tf = (v) => showVerdict(verdict, v);
