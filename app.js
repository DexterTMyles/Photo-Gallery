const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");

// Keep Tracks of number of pictures, start at 0
let counter = 0;

// Added Event Listeners for both Buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

//This Function change picture when clicked on
function nextSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });

  // Keep track of how many pictures been clicked on
  if (counter === 4) {
    counter = -1;
  }
  counter++;

  // Changes background pictures
  container.style.backgroundImage = `url(../img/bcg-${counter}.jpeg)`;
}

//This Function go to previous pictures when clicked on
function prevSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });

  // Subtrack of how many pictures been clicked on
  if (counter === 0) {
    counter = 5;
  }
  counter--;

  // Changes background pictures
  container.style.backgroundImage = `url(../img/bcg-${counter}.jpeg)`;
}
