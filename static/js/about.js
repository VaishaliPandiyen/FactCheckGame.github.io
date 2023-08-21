let sideInfo = document.querySelector(".as_hidden");
let ash_title = document.getElementById("ash_title");
let ash_info = document.getElementById("ash_info");

function showWho() {
  sideInfo.classList.add("as_visible");
  ash_title.innerText = "Who is behind TBD";
  ash_info.innerHTML = "";
}
function showCd() {
  sideInfo.classList.add("as_visible");
  ash_title.innerText = "Copyrights and data";
  ash_info.innerHTML = "";
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
window.onload(viewFull());
