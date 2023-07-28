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
  // for (let c of click_texts) {
  //   c.style.position = "relative";
  //   c.style.opacity = "0";
  // }
  clue_title.opacity = "0";
  // slant.style.transition = "left 2s ease, opacity 2s ease";
  // slant.style.opacity = "0";
};
// To achieve the sliding out effect, you should set the left and opacity properties first and then change the display property.
function handleClueCardClick(card) {
  card3_click1_basics();
  // src_card.style.display = "None";
  card3.style.height = "150px";
  card3.style.width = "760px";
  clue_title.style.transition = "left 2s ease, opacity 1s ease";
  clue_title.style.left = "-100%";
  clue_title.style.opacity = "0";
  // Use a small delay to apply the opacity transition after changing the display property
  setTimeout(() => {
    clues.style.display = "flex";
  }, 1000);
  setTimeout(() => {
    clue_title.style.display = "none";
    clues.style.transition = "opacity 2s ease";
    clues.style.opacity = "1";
  }, 1500);
  // slant.style.left = "-10%";
  // setTimeout(() => {
  //   slant.style.display = "none";
  // }, 3000);

  // Adjust clue_card width after some time to prevent the clue_title from coming to the middle of the div before easing out on the left side
  setTimeout(() => {
    clue_card.style.width = "760px";
  }, 2000);
}

/*

CLUES CAROUSEL

*/

let currentIndex_1 = 0;
const clue = document.querySelectorAll(".clue");

function showClue(index) {
  clue.forEach((clue, i) => {
    if (i === index) {
      clue.classList.add("active");
    } else {
      clue.classList.remove("active");
    }
  });
}

function showNextClue() {
  currentIndex_1 = (currentIndex_1 + 1) % clue.length;
  showClue(currentIndex_1);
}

function showPreviousClue() {
  currentIndex_1 = (currentIndex_1 - 1 + clue.length) % clue.length;
  showClue(currentIndex_1);
}

/* 

CLICKING SOURCE(S)

*/

// let card3_click2_basics = () => {
//   for (let c of click_texts) {
//     c.style.position = "relative";
//     c.style.opacity = "0";
//   }
//   slant.style.transition = "left 2s ease, opacity 2s ease";
//   slant.style.opacity = "0";
// };
// // To achieve the sliding out effect, you should set the left and opacity properties first and then change the display property.
// function handleSrcCardClick(card) {
//   card3_click1_basics();
//   clue_card.style.display = "None";
//   src_title.style.transition = "left 2s ease, opacity 1s ease";
//   src_title.style.left = "-100%";
//   src_title.style.opacity = "0";
//   // Use a small delay to apply the opacity transition after changing the display property
//   setTimeout(() => {
//     srcs.style.display = "flex";
//   }, 1000);
//   setTimeout(() => {
//     src_title.style.display = "none";
//     srcs.style.transition = "opacity 2s ease";
//     srcs.style.opacity = "1";
//   }, 1500);
//   slant.style.left = "-10%";
//   setTimeout(() => {
//     slant.style.display = "none";
//   }, 3000);
//   // Adjust clue_card width after some time to prevent the clue_title from coming to the middle of the div before easing out on the left side
//   setTimeout(() => {
//     src_card.style.width = "760px";
//   }, 1000);
// }

/*

SOURCES CAROUSEL

*/

// let currentIndex_2 = 0;
// const src = document.querySelectorAll(".source");

// function showSources(index) {
//   src.forEach((src, i) => {
//     if (i === index) {
//       src.classList.add("active");
//     } else {
//       src.classList.remove("active");
//     }
//   });
// }

// function showNextSource() {
//   currentIndex_2 = (currentIndex_2 + 1) % src.length;
//   showSources(currentIndex_2);
// }
// function showPreviousSource() {
//   currentIndex_2 = (currentIndex_2 - 1 + src.length) % src.length;
//   showSources(currentIndex_2);
// }

/*

TOGGLE BETWEEN CLUES AND SOURCES

*/

// function viewSources() {
//   clues.style.opacity = "0";
//   srcs.style.display = "flex";

//   setTimeout(() => {
//     clues.style.display = "none";
//     srcs.style.opacity = "1";
//   }, 1000);
// }

/*
-----------------------------------------------------
*/

/*

VERDICT

*/

let emoji = document.getElementById("emoji");
let verdict = document.getElementById("verdict");

const showVerdict = () => {
  setTimeout(() => {
    sec2n3.style.display = "none";
    sec4.style.display = "flex";
    setTimeout(() => (emoji.style.transform = "scale(1)"), 100);
  }, 2000);
  verdict.style.display = "flex";
  setTimeout(() => {
    verdict.style.opacity = "1";
    emoji.style.transform = "scale(0.3)";
  }, 3000);
};

function yes(v) {
  sec2n3.style.opacity = "0";
  if (v == true) {
    emoji.setAttribute("src", "../img/sunglass.png");
    verdict.style.background = "yellowgreen";
    verdict.style.border = "3px solid green";
  } else {
    emoji.setAttribute("src", "../img/what.png");
    verdict.style.background = "orangered";
    verdict.style.border = "5px solid red";
  }
  showVerdict();
}
function no(v) {
  sec2n3.style.opacity = "0";
  if (v == false) {
    emoji.setAttribute("src", "../img/what.png");
    verdict.style.background = "orangered";
    verdict.style.border = "5px solid red";
  } else {
    emoji.setAttribute("src", "../img/sunglass.png");
    verdict.style.background = "yellowgreen";
    verdict.style.border = "3px solid green";
  }
  showVerdict();
}
