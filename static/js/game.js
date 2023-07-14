let claimCard = document.querySelector(".claim_wrapper");
let card = document.querySelector(".card");
let sec1 = document.querySelector(".sec_1");

claimCard.addEventListener("click", () => {
  claimCard.style.display = "None";
  card.style.transition = "width 1s ease-in-out";
  card.style.width = "600px";
  sec1.style.display = "flex";
});

let sec1nxt = document.querySelector(".sec_1_nxt");
let sec2 = document.querySelector(".sec_2");

sec1nxt.addEventListener("click", () => {
  sec1.style.display = "none";
  sec2.style.display = "flex";
});

let sec2nxt = document.querySelector(".sec_2_nxt");
let sec3 = document.querySelector(".sec_3");

sec2nxt.addEventListener("click", () => {
  sec2.style.display = "none";
  sec3.style.display = "flex";
});
