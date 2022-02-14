// add to card

const prdcsCountEl = document.getElementById("prod-count");
const addToCartBtns = document.querySelectorAll(".add-to-cart");

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", () => {
//     productsCounEl.textContent = +productsCounEl.textContent + +quantityInput[i].value;
//     quantityInput[i].value = 1;
//   });
// }

addToCartBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    prdcsCountEl.textContent = +prdcsCountEl.textContent + +quantityInput[i].value;
    quantityInput[i].value = 1;
  })
})

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

//піднятись вверх перед оновленням сторінки
$(window).on("beforeunload", () => {
  $(window).scrollTop(0);
});

//aos
AOS.init();

// let minCount = 1;
// let maxCount = 10;

// for (let i = 0; i < quantityInput.length; i++) {
//   let currentValue = +quantityInput[i].value;
//   toggleButtonState(currentValue, incBtns[i], decBtns[i]);
// }

// function toggleButtonState(count, incBtn, decBtn) {
//   decBtn.disabled = count <= minCount;
//   incBtn.disabled = count >= maxCount;
// }

// for (let i = 0; i < decBtns.length; i++) {
//   decBtns[i].addEventListener("click", () => {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue - 1;
//     quantityInput[i].value = nextValue;
//     toggleButtonState(nextValue, incBtns[i], decBtns[i]);
//   });
// }

// for (let i = 0; i < incBtns.length; i++) {
//   incBtns[i].addEventListener("click", () => {
//     let currentValue = +quantityInput[i].value;
//     let nextValue = currentValue + 1;
//     quantityInput[i].value = nextValue;
//     toggleButtonState(nextValue, incBtns[i], decBtns[i]);
//   });
// }


let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");

function Counter(
  decrementBtn,
  incrementBtn,
  inputField,
  minCount = 1,
  maxCount = 8,
) {
  this.domRfs = {
    decrementBtn,
    incrementBtn,
    inputField,

  };
  this.toggleButtonState = function () {
    let count = this.domRfs.inputField.value;
    this.domRfs.decrementBtn.disabled = count <= minCount;
    this.domRfs.incrementBtn.disabled = count >= maxCount;
  };

  this.toggleButtonState();

  this.decrement = function () {
    this.domRfs.inputField.value = +this.domRfs.inputField.value - 1
    this.toggleButtonState()
  }

  this.increment = function () {
    this.domRfs.inputField.value = +this.domRfs.inputField.value + 1
    this.toggleButtonState()
  }

  this.domRfs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  )

  this.domRfs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  )

}

// let counterOneEl = new Counter(
//   decrementBtns[0],
//   incrementBtns[0],
//   quantityInput[0]);

let counters = []

// for (let i = 0; i < quantityInput.length; i++) {
//   counters[i] = new Counter(
//     decrementBtns[i],
//     incrementBtns[i],
//     quantityInput[i]
//   )
// }

quantityInput.forEach((item, i) => {
  counters[i] = new Counter(
    decrementBtns[i],
    incrementBtns[i],
    item
  )
});