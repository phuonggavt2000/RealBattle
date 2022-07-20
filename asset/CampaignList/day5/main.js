const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const eKey = $(".key .card__content");
const eLocation = $(".location .card__content");
const eWhich = $(".which .card__content");
const eCode = $(".code .card__content");
const alert = $(".alert");
const box = $(".box");
const body = $("body");

document.addEventListener("keydown", (e) => {
  eKey.innerText = e.key;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  if (e.key == " ") {
    eKey.innerText = "Space";
  }
  alert.classList.add("hide");
  box.classList.remove("hide");
  // Khi click bất khì phím nào trong thẻ header nó đều thực hiện
});
