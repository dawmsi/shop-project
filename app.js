// add to card

const productsCounEl = document.getElementById("prod-count");
const addToCartBtns = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", () => {
    productsCounEl.textContent = +productsCounEl.textContent + 1;
  });
}

// change like state

const LikeBtns = document.querySelectorAll(".like");

LikeBtns.forEach((likeB) => {
  likeB.addEventListener("click", () => {
    likeB.classList.toggle("liked");
  });
});

// filter selecting

const selectList = document.querySelectorAll(".filter-item");

selectList.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("filter-item-selected");
  });
});

// open/close modal window
const modalW = document.querySelector(".modal");
const moreDetailsB = document.querySelectorAll(".more-details");
const btnClose = document.querySelector(".btn-close");
function OpenClose() {
  modalW.classList.toggle("show");
}

function showOnScrollTo() {
  // параметр виводу модального выкна
  let positionPage = "middle";

  switch (positionPage) {
    case "start":
      startP();
      break;
    case "middle":
      middleP();
      break;
    case "end":
      endP();
      break;
    default:
      break;
  }
}

function startP() {
  if (window.scrollY) {
    OpenClose();
    stopEL();
  }
}
function middleP() {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    OpenClose();
    stopEL();
  }
}
function endP() {
  if ($(window).scrollTop() + $(window).height() >= $(document).height() - 1) {
    OpenClose();
    stopEL();
  }
}

window.addEventListener("scroll", showOnScrollTo);

function stopEL() {
  window.removeEventListener("scroll", showOnScrollTo);
}

// open
moreDetailsB.forEach((button) => {
  button.addEventListener("click", OpenClose);
});
// close
btnClose.addEventListener("click", OpenClose);

//slider
$(".carusel").slick({
  dots: true,
  autoplay: true,
});

//пыднятись вверх перд оновленням сторінки
$(window).on("beforeunload", () => {
  $(window).scrollTop(0);
});

//aos
AOS.init();
