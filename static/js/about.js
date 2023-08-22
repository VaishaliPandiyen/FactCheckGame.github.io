let sideInfo = document.querySelector(".as_hidden");
let ash_title = document.getElementById("ash_title");
let ash_info = document.getElementById("ash_info");

function showWho() {
  sideInfo.classList.add("as_visible");
  ash_title.innerText = "Who is behind TBD";
  ash_info.innerHTML =
    "I'm Vaishali Pandiyen, a \"Media literate master's student keen to pursue a career in tech + data/media\" as my LinkedIn profile says. <br><br>  I've worked as a reporter for journalistic podcast and a reactJS developer in India. <br> <br>   I'm currently (2022-23) a student, doing her masters in Computational and Data Journalism at Cardiff University, as of August 2023. <br> <br> This game, TBD, is a fact-check/media-literacy game for made for anyone whose age is 2-digits, but made mainly for young children as a in-class or break time activity where they figure out if the supportive statements (clues) validate a \"claim\". I've made this prototype for my masters' dissertation to explore and work on journalistic gamification. <br><br>  You can read more about the game/project in this about page and in my project report.";
}
function showCd() {
  sideInfo.classList.add("as_visible");
  ash_title.innerText = "Copyrights and data";
  ash_info.innerHTML =
    "  This game/project belongs to me, not to the university. This is a student project that belongs in my personal portfolio -- not commercial or for public use.  <br><br>  I have referenced fact-checks from PolitiFact for getting information and clues about the claims, and of course, the claims themselves. I do not collect any user input from this game. ";
}
function hideSide() {
  sideInfo.classList.remove("as_visible");
}

let moreInfo = document.querySelector(".a_moreGameinfo");
let aMain = document.querySelector(".a_main");
let aInfo1 = document.getElementById("a_game_1");
let aArticle = document.getElementById("a_article");
let exp_a = document.querySelector(".exp_a");

function showArticle() {
  moreInfo.style.display = "none";
  aInfo1.style.width = "25vw";
  aMain.classList.add("a_main_article");
  aArticle.classList.add("article_wrapper");
  exp_a.style.display = "none";
}
function hideArticle() {
  moreInfo.style.display = "flex";
  aInfo1.style.width = "50vw";
  aMain.classList.remove("a_main_article");
  aArticle.classList.remove("article_wrapper");
  exp_a.style.display = "block";
}
showArticle();

let tldr = document.getElementById("tldr");
let full = document.getElementById("full");
let aTldr = document.getElementById("article_tldr");
let aFull = document.getElementById("article_full");

function viewTldr() {
  aTldr.classList.add("aTldr");
  aFull.classList.remove("aFull");
  tldr.classList.add("selected_length");
  full.classList.remove("selected_length");
}
function viewFull() {
  aTldr.classList.remove("aTldr");
  aFull.classList.add("aFull");
  tldr.classList.remove("selected_length");
  full.classList.add("selected_length");
}
viewFull();
