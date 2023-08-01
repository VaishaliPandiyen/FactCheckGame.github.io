/* 

ON GAME LOAD

*/

let sec1 = document.querySelector(".sec_1");
let sec2 = document.querySelector(".sec_2");
let sec3 = document.querySelector(".sec_3");
let sec2n3 = document.querySelector(".sec_2_and_3");
let sec4 = document.querySelector(".sec_4");

const gameLoad = () => {
  sec1.style.opacity = "1";
  sec1.style.transition = "opacity 1s ease";

  setTimeout(() => {
    sec1.style.opacity = "0";
    setTimeout(() => {
      sec1.style.display = "None";
    }, 500);
  }, 1000);
  setTimeout(() => {
    sec2.style.display = "Flex";
    setTimeout(() => (sec2.style.opacity = "1"), 500);
  }, 1500);
  setTimeout(() => {
    sec2n3.style.top = "25.5%";
    sec3.style.display = "Flex";
    sec3.style.transform = "scale(0.8)";
    setTimeout(() => (sec3.style.opacity = "0.5"), 500);

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
  }, 3000);
};

gameLoad();

/* ----------------------------------------------------- */

/*

CLICK TO SHOW CLUES AND SOURCES

*/
let click_texts = document.querySelectorAll(".click_text");

let card3 = document.querySelector(".card_3");
let clue_title = card3.querySelector(".click_text");
let clues = document.querySelector(".clues");

/*  CLICKING CLUE(S) */

let card3_click1_basics = () => {
  clue_title.opacity = "0";
};

let isCluesSeen = false;

const handleClueCardClick = (card) => {
  isCluesSeen = true;
  card3_click1_basics();

  card3.style.height = "150px";
  card3.style.width = "760px";
  clue_title.style.transition = "left 1s ease, opacity 0.7s ease";
  clue_title.style.left = "-100%";
  clue_title.style.opacity = "0";

  setTimeout(() => {
    clues.style.display = "flex";
  }, 800);
  setTimeout(() => {
    clue_title.style.display = "none";
    // clues.style.transition = "opacity 0.5s ease";
    clues.style.opacity = "1";
  }, 1000);
};

/*

CLUES CAROUSEL

*/

let currentIndex = 0;
const viewedClues = [];

const clue = document.querySelectorAll(".clue");

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
  if (currentIndex < clue.length - 1) {
    currentIndex++;
    showClue(currentIndex);
    if (!viewedClues.includes(currentIndex)) {
      viewedClues.push(currentIndex);
    }
  }
};

const showPreviousClue = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showClue(currentIndex);
  }
};

/* ----------------------------------------------------- */

/*

VERDICT

*/

let emoji = document.getElementById("emoji");
let verdict = document.getElementById("verdict");
let verdict_title = document.getElementById("verdict_title");
let verdict_content = document.getElementById("verdict_content");
let verdict_info = document.getElementById("verdict_info");
let end_action = document.getElementById("end_action");

let g1c2a1s;
let g1c2a1 = () => (g1c2a1s = true);

const verdicts = {
  0: "How did you know 200 dogs showed up just because he’s a dog lover?",
  1: "BUT that didn’t say anything about 200 dogs!",
  2: "The reel said he had 200 dogs for his birthday. BUT the number of likes and shares on a reel does not necessarily indicate whether the information in the reel is true!",
  3: "A neighborhood app post by his family does sound credible. However…",
  4: "Now it is good enough to be true!",
};
// To find the maximum key (property) in the verdicts object, get the keys as an array using Object.keys() and then use reduce() to find max value instead of Math.max(), as the keys in the  object are strings
let v_n = Object.keys(verdicts).reduce(
  (max, key) => (Number(key) > max ? Number(key) : max),
  -Infinity
);
for (let i = 0; i <= v_n; i++) {
  console.log(i);
}

const showVerdict = (verdict, v) => {
  sec2n3.style.opacity = "0";
  emoji.setAttribute("src", v ? "../img/sunglass.png" : "../img/what.png");
  verdict_title.innerHTML = v ? "That's right" : "You missed that!";

  setTimeout(() => {
    sec2n3.style.display = "none";
    sec4.style.display = "flex";
    setTimeout(() => (emoji.style.transform = "scale(0.5)"), 100);
  }, 1000);
  setTimeout(() => (emoji.style.transform = "scale(0.2)"), 2000);

  setTimeout(() => {
    const { style } = verdict;
    style.background = v ? "yellowgreen" : "orangered";
    style.border = v ? "3px solid green" : "5px solid red";
    verdict_content.style.opacity = "1";
    end_action.style.opacity = "1";
    setTimeout(() => {
      if (isCluesSeen == true) {
        if (verdict.style.background == "yellowgreen") {
          verdict_info.innerHTML = verdicts[Math.max(...viewedClues)];
          // switch (Math.max(...viewedClues)) {
          //   case 0:
          //     verdict_info.innerHTML = verdicts[0];
          //     break;
          //   case 1:
          //     verdict_info.innerHTML = verdicts[1];
          //     break;
          //   case 2:
          //     g1c2a1s == true
          //       ? (verdict_info.innerHTML = verdicts[2][2.1])
          //       : (verdict_info.innerHTML = verdicts[2][2.2]);
          //     break;
          //   case 3:
          //     verdict_info.innerHTML = verdicts[3];
          //     break;
          //   case 4:
          //     verdict_info.innerHTML = verdicts[4];
          //     break;
          // }
        } else if (verdict.style.background == "orangered") {
          // responses for false(s)
        }
      } else {
        // response for not viewing clues
      }
    }, 500);
  }, 3500);
};

const tf = (v) => showVerdict(verdict, v);

/* ----------------------------------------------------- */

/*

OTHERS

*/

const more = () => setTimeout(() => (window.location.href = "fc1.html"), 1000);

const exit = () => setTimeout(() => (window.location.href = "play.html"), 1000);
