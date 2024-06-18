document.addEventListener("DOMContentLoaded", function () {
  var slider = document.querySelector(".slider");
  var slides = document.querySelectorAll(".img");
  var nextButton = document.querySelector(".next");
  var prevButton = document.querySelector(".prev");

  var currentIndex = 0;

  function updateButtons() {
    if (currentIndex === 0) {
      prevButton.classList.add("hidden");
      nextButton.classList.remove("hidden");
      nextButton.classList.add("single");
      prevButton.classList.remove("single");
    } else if (currentIndex === slides.length - 1) {
      nextButton.classList.add("hidden");
      prevButton.classList.remove("hidden");
      prevButton.classList.add("single");
      nextButton.classList.remove("single");
    } else {
      prevButton.classList.remove("hidden");
      nextButton.classList.remove("hidden");
      prevButton.classList.remove("single");
      nextButton.classList.remove("single");
    }
  }

  function slideToIndex(index) {
    slider.style.transform = "translateX(-" + index * 100 + "%)";
    currentIndex = index;
    updateButtons();
  }

  nextButton.addEventListener("click", function () {
    if (currentIndex < slides.length - 1) {
      slideToIndex(currentIndex + 1);
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      slideToIndex(currentIndex - 1);
    }
  });

  updateButtons();
});
