const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bntOpen = $(".open-modal-btn");
const iconClose = $(".modal__header i");
const bntClose = $(".modal__footer button");
const modal = $(".modal");

function toggleModal() {
  modal.classList.toggle("hide");
}

bntOpen.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
bntClose.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  console.log(e.currentTarget);
  if (e.target == e.currentTarget) {
    // Khi click vào modal mà ko phải trong modal_inner thì sẽ thực hiện toggleModal();
    toggleModal();
  }
});
