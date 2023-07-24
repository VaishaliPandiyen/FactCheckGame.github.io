let card1 = document.querySelector(".card_1");
let sec1 = document.querySelector(".sec_1");
let sec2 = document.querySelector(".sec_2");
let sec3 = document.querySelector(".sec_3");

sec1.addEventListener("click", () => {
  sec1.style.display = "None";
  sec2.style.display = "Flex";
  setTimeout(() => {
    // sec2.style.display = "None";
    sec3.style.display = "Flex";
  }, 3000); // 30000 ms = 30 secs
});
