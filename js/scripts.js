//variables
const left = document.querySelector(".slide_nav-left");
const right = document.querySelector(".slide_nav-right");
let index = 1;
const btnRWD = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const nav_link = document.querySelectorAll(".nav__link");

//slider
const showDivs = n => {
  let slides = document.querySelectorAll(".slide");

  n > slides.length ? (index = 1) : null;

  n < 1 ? (index = slides.length) : null;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slides[index - 1].style.opacity = "1";

  if (slides.length == 1) {
    right.style.opacity = "0";
    left.style.opacity = "0";
  } else {
    right.style.opacity = "1";
    left.style.opacity = "1";
  }
};

const nextSlide = n => {
  showDivs((index += n));
};

showDivs(index);

left.addEventListener("click", () => {
  nextSlide(-1);
});

right.addEventListener("click", () => {
  nextSlide(+1);
});

// setInterval(function() {
//   nextSlide(+1);
// }, 4000);

//back to top
let scrollTo = 100,
  backToTop = () => {
    let scrollTop = $(window).scrollTop();
    scrollTop > scrollTo
      ? $("#back-to-top").addClass("show")
      : $("#back-to-top").removeClass("show");
  };

$(window).scroll(() => backToTop());

$("#back-to-top, .logo").click(() =>
  $("html, body").animate({ scrollTop: 0 }, 700)
);

//scroll to section
$(".nav__link").click(function(e) {
  e.preventDefault();

  $(".nav__link").removeClass("active");
  $(this).addClass("active");

  let position = $($(this).attr("href")).offset().top;

  $("body, html").animate(
    {
      scrollTop: position
    },
    800
  );
});

//rwd menu

btnRWD.addEventListener("click", () => {
  nav.classList.toggle("active");
  btnRWD.classList.toggle("active");
});

nav_link.forEach(item => {
  item.addEventListener("click", () => {
    nav.classList.remove("active");
    btnRWD.classList.remove("active");
  });
});
