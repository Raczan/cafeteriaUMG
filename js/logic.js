const contentCoffee = document.getElementById("contentCoffee");
const contentPastry = document.getElementById("contentPastry");
const contentTeas = document.getElementById("contentTeas");

const coffeBtn = document.getElementById("coffe");
const pastryBtn = document.getElementById("pastry");
const teasBtn = document.getElementById("teas");

const connector = document.getElementById("connector");

coffeBtn.addEventListener("click", () => {
  contentCoffee.classList.add("opacity-100");
  contentPastry.classList.remove("opacity-100");
  contentTeas.classList.remove("opacity-100");

  coffeBtn.classList.add("active");
  pastryBtn.classList.remove("active");
  teasBtn.classList.remove("active");

  connector.classList.remove("translate-y-full");
});

pastryBtn.addEventListener("click", () => {
  contentCoffee.classList.remove("opacity-100");
  contentPastry.classList.add("opacity-100");
  contentTeas.classList.remove("opacity-100");

  coffeBtn.classList.remove("active");
  pastryBtn.classList.add("active");
  teasBtn.classList.remove("active");
});

teasBtn.addEventListener("click", () => {
  contentCoffee.classList.remove("opacity-100");
  contentPastry.classList.remove("opacity-100");
  contentTeas.classList.add("opacity-100");

  coffeBtn.classList.remove("active");
  pastryBtn.classList.remove("active");
  teasBtn.classList.add("active");

  connector.classList.add("translate-y-full");
});
