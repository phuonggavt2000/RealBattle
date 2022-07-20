const bnt = document.querySelector(".search-box__bnt");

bnt.onclick = function () {
  this.parentElement.classList.toggle("open");
  console.log(this.previousSibling);
  this.previousElementSibling.focus();
};
