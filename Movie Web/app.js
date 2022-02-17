const movieBar = document.querySelectorAll(".movie-bar");
const movieArrow = document.querySelectorAll(".movie-arrow");

// console.log(movieBar);
// console.log(movieArrow);

movieArrow.forEach((arrow, i) => {
  let movieLength = movieBar[i].querySelectorAll(".single-movie-image").length;
  let clickCount = 0;
  let screenRatio = Math.floor(window.innerWidth / 240);
  arrow.addEventListener("click", () => {
    clickCount++;
    if (movieLength - (5 + clickCount) + (5 - screenRatio) >= 0) {
      movieBar[i].style.transform = `translateX(${
        movieBar[i].computedStyleMap().get("transform")[0].x.value - 260
      }px)`;
    } else {
      movieBar[i].style.transform = `translateX(0)`;
      clickCount = 0;
    }
  });
});

const themeContainer = document.querySelector(".theme-container");
const themeChange = document.querySelectorAll(
  `.nav-bar,.navbar-menu-container,.profile-text-container,.theme-container,.theme-content,.theme-ball,.side-bar,.sidebar-icons,.menu-container,.movie-section-title,.single-movie-desc,.movie-arrow,.logo-text`
);

themeContainer.addEventListener("click", () => {
  themeChange.forEach((item) => {
    item.classList.toggle("active");
  });
});
