const loader = () => {
  let loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 2200);
};
loader();

const dropDownAnimation = () => {
  var menu = document.querySelector("nav>h4");
  var dropDown = document.querySelector(".menu-dropdown");
  var img = document.querySelector("nav img");
  let flag = 0;

  menu.addEventListener("click", function () {
    if (flag == 0) {
      dropDown.style.top = 0;
      img.style.opacity = 0;
      flag = 1;
    } else {
      dropDown.style.top = "-100%";
      img.style.opacity = 1;
      flag = 0;
    }
  });
};
dropDownAnimation();

const onHoverImgDisplay = () => {
  let allHeads = document.querySelectorAll(".heads");
  allHeads.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-image");
      let rDiv = document.querySelector("#img-display");
      rDiv.style.backgroundImage = `url(${image})`;
      e.style.color = "#fff";
      e.style.borderLeft = "3px solid #fe320a";
      e.style.cursor = "pointer";
    });
    e.addEventListener("mouseleave", function () {
      e.style.color = "#504a45";
      e.style.borderLeft = "3px solid #504a45";
    });
  });
};
onHoverImgDisplay();

const swiperAnimation = () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    // spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
};
swiperAnimation();
