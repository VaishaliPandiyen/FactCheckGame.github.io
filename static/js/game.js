/* */

const fetchClaims = async () => {
  try {
    let response = await fetch("../data/claims.json");
    if (!response.ok) {
      throw new Error("Error loading claims");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching claims:", error);
    return null;
  }
};

// let claims;
const getClaimsArray = async () => {
  try {
    let claimsObject = await fetchClaims();
    let claimsArray = claimsObject.claims;
    return claimsArray;
    // console.log(claims);
  } catch (error) {
    return "Error:", error;
  }
};

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
  sec1.style.transition = "opacity 1.2s ease";

  setTimeout(() => {
    sec1.style.opacity = "0";
    setTimeout(() => {
      sec1.style.display = "None";
    }, 500);
  }, 1500);
  setTimeout(() => {
    sec2.style.display = "Flex";
    setTimeout(() => (sec2.style.opacity = "1"), 500);
  }, 2000);
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

/* ----------------------------------------------------- */

/*

LOAD CLAIM OBJECT INFO IN GAME:

*/
const c_no = document.getElementById("c_no");
const c_who = document.getElementById("c_who");
const c_when = document.getElementById("c_when");
const c_what = document.getElementById("c_what");

// const playBtn = document.getElementById("playBtn");

// let n;

let n = 0;

let clueWrapper = document.querySelector(".i_container");

let click_texts = document.querySelectorAll(".click_text");

let card3 = document.querySelector(".card_3");
let clue_title = card3.querySelector(".click_text");
let clues = document.querySelector(".clues");
let card3_click1_basics = () => {
  clue_title.opacity = "0";
};

let isCluesSeen = false;

let currentIndex = 0;
const viewedClues = [];

const clue = document.querySelectorAll(".clue");

let emoji = document.getElementById("emoji");
let verdict = document.getElementById("verdict");
let verdict_title = document.getElementById("verdict_title");
let verdict_content = document.getElementById("verdict_content");
let verdict_info = document.getElementById("verdict_info");
let end_action = document.getElementById("end_action");

const loadClaimInfo = async (n) => {
  try {
    const claims = await getClaimsArray();
    if (claims && claims.length > n) {
      c = claims[n];
      c_no.innerHTML = `Claim ${c["id"]}`;
      c_who.innerHTML = c["involves"];
      c_what.innerHTML = c["background"];
      c_when.innerHTML = c["claim"];
      // console.log(c["clues"]);
      let clues = c["clues"];
      for (let eachClue in clues) {
        let p = document.createElement("p");
        p.setAttribute("class", "clue");
        p.innerHTML = clues[eachClue];
        clueWrapper.appendChild(p);
        // if (eachClue == 0) {
        //   p.setAttribute("class", "active");
        // }
      }
      // console.log(clue);
      gameLoad();
    } else {
      console.log("Claims array is empty or couldn't be fetched.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  clueWrapper.querySelectorAll(".clue")[0].classList.add("active");
};

// FIGURE OUT: HOW TO TOGGLE ACTIVE CLASS AFTER LOADING THE CONTENT THIS WAY (OR FIND ANOTHER WAY) -- Situ: Can't toggle it off from the first clue 

// playBtn.addEventListener("click", () => {
//   n = 0;
//   loadClaimInfo();
// });

loadClaimInfo(n);

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

// let g1c2a1s;
// let g1c2a1 = () => (g1c2a1s = true);

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
// for (let i = 0; i <= v_n; i++) {
//   console.log(i);
// }

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

const exit = () => setTimeout(() => (window.location.href = "play.html"), 1000);

const more = async () => {
  n = 1;
  try {
    const claims = await getClaimsArray();
    console.log(claims[n]["id"]);
    if (n < claims.length) {
      await showClaim(n);
    } else {
      exit();
    }
  } catch (error) {
    console.error("Error fetching claims:", error);
    exit();
  }
  setTimeout(() => (window.location.href = "game.html"), 1000);
};
