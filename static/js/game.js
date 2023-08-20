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

let game_wrapper = document.querySelector(".game_wrapper");
let sec1 = document.querySelector(".sec_1");
let sec2 = document.querySelector(".sec_2");
let sec3 = document.querySelector(".sec_3");
let sec2n3 = document.querySelector(".sec_2_and_3");
let sec4 = document.querySelector(".sec_4");

const gameLoad = async () => {
  sec2.style.opacity == 1
    ? (game_wrapper.style.justifyContent = "flex-start")
    : (game_wrapper.style.alignItems = "center");
};

/* ----------------------------------------------------- */

/*

LOAD CLAIM OBJECT INFO IN GAME:

*/
const c_no = document.getElementById("c_no");
const c_who = document.getElementById("c_who");
const c_when = document.getElementById("c_when");
const c_what = document.getElementById("c_what");

let n = 0;
let claims;

let clueWrapper = document.querySelector(".i_container");

let click_texts = document.querySelectorAll(".click_text");

let card3 = document.querySelector(".card_3");
let clue_title = document.querySelector(".click_text");
let clues_wrapper = document.querySelector(".clues");
let showPrev = document.getElementById("showPrev");
let showNext = document.getElementById("showNext");
let card3_click1_basics = () => {
  clue_title.opacity = "0";
};

let tick = document.getElementById("tick");
let cross = document.getElementById("cross");
let emoji = document.getElementById("emoji");
let verdict_container = document.getElementById("verdict");
let verdict_title = document.getElementById("verdict_title");
let verdict_content = document.getElementById("verdict_content");
let verdict_info = document.getElementById("verdict_info");
let v_srcLink = document.getElementById("v_srcLink");
let v_srcTitle = document.getElementById("v_srcTitle");
let v = document.getElementById("v");
let end_action = document.getElementById("end_action");
let exit = document.getElementById("exit");
let moreClaims = document.getElementById("more");
let noViewClue = document.getElementById("noViewClue");

const loadClaimInfo = async (n) => {
  try {
    claims = await getClaimsArray();

    if (claims && claims.length > n) {
      c = claims[n];
      gameLoad();

      c_no.innerHTML = `Claim ${c["id"]}`;
      c_who.innerHTML = c["involves"];
      c_what.innerHTML = c["background"];
      c_when.innerHTML = c["claim"];

      /*

      CLUES :

      */

      let clues = c["clues"];
      for (let eachClue in clues) {
        let p = document.createElement("p");
        p.setAttribute("class", "clue");
        p.innerHTML = clues[eachClue];
        clueWrapper.appendChild(p);
      }
      clueWrapper.querySelectorAll(".clue")[0].classList.add("active");
      let clue = document.querySelectorAll(".clue");
      let isCluesSeen = false;
      let currentIndex = 0;
      const viewedClues = [0];

      card3.addEventListener("click", () => {
        isCluesSeen = true;
        card3_click1_basics();

        card3.style.height = "150px";
        card3.style.width = "760px";
        card3.style.transition = "height 1s, width 1s"
        clue_title.style.transition = "left 1s ease, opacity 0.7s ease";
        clue_title.style.left = "-100%";
        clue_title.style.opacity = "0";

        setTimeout(() => {
          clues_wrapper.style.display = "flex";
        }, 800);
        setTimeout(() => {
          clue_title.style.display = "none";
          clues_wrapper.style.opacity = "1";
        }, 1000);
      });

      const showClue = (index) => {
        clue.forEach((c, i) => {
          if (i === index) {
            c.classList.add("active");
          } else {
            c.classList.remove("active");
          }
        });
      };

      showNext.addEventListener("click", () => {
        if (currentIndex < clue.length - 1) {
          currentIndex++;
          showClue(currentIndex);
          if (!viewedClues.includes(currentIndex)) {
            viewedClues.push(currentIndex);
          }
        }
      });
      showPrev.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          showClue(currentIndex);
        }
      });

      /*

      VERDICT & RESPONSES :

      */

      let responses = c["responses"];
      let verdict = responses["verdict"];
      let trueBtnRes = responses["trueBtn"];
      let falseBtnRes = responses["falseBtn"];
      let bool = verdict["boolean"];
      v.innerHTML = `"${verdict["v"]}"`;
      v_srcLink.setAttribute("href", verdict["source"]["link"]);
      v_srcTitle.innerHTML = verdict["source"]["title"];

      const showVerdict = (verdict_container, v) => {
        sec2n3.style.opacity = "0";
        emoji.setAttribute(
          "src",
          v ? "../img/sunglass.png" : "../img/what.png"
        );
        verdict_title.innerHTML = v ? "That's right" : "You missed that!";

        setTimeout(() => {
          sec2n3.style.display = "none";
          sec4.style.display = "flex";
          setTimeout(() => (emoji.style.transform = "scale(0.5)"), 100);
        }, 1000);
        setTimeout(() => (emoji.style.transform = "scale(0.2)"), 2000);

        setTimeout(() => {
          const { style } = verdict_container;
          style.background = v ? "yellowgreen" : "orangered";
          style.border = v ? "3px solid green" : "5px solid red";
          verdict_content.style.opacity = "1";
          end_action.style.opacity = "1";
          setTimeout(() => {
            if (isCluesSeen == true) {
              if (verdict_container.style.background == "yellowgreen") {
                verdict_info.innerHTML =
                  trueBtnRes[`${Math.max(...viewedClues)}`];
              } else {
                verdict_info.innerHTML =
                  falseBtnRes[`${Math.max(...viewedClues)}`];
              }
            }
          }, 500);
        }, 3500);
      };

      function alertToViewClues() {
        noViewClue.style.display = "flex";
        setTimeout(() => (noViewClue.style.display = "none"), 5000);
      }
      tick.addEventListener("click", () => {
        if (isCluesSeen == true) {
          showVerdict(verdict_container, bool);
        } else {
          alertToViewClues();
        }
      });
      cross.addEventListener("click", () => {
        if (isCluesSeen == true) {
          showVerdict(verdict_container, !bool);
        } else {
          alertToViewClues();
        }
      });
    } else {
      console.log("Claims array is empty or couldn't be fetched.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

loadClaimInfo(n);

/*

MORE & EXIT

*/

const exitGame = () =>
  setTimeout(() => (window.location.href = "play.html"), 1000);

const moreClaimsClickHandler = async (n, claims) => {
  n++;
  console.log(n, claims.length);
  try {
    if (n < claims.length) {
      setTimeout(() => (sec4.style.display = "none"), 500);
      await loadClaimInfo(n);
    } else {
      exitGame();
    }
  } catch (error) {
    console.error("Error fetching claims:", error);
    exitGame();
  }
};

exit.addEventListener("click", () => exitGame());

moreClaims.addEventListener("click", () => moreClaimsClickHandler(n, claims));
