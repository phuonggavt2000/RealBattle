const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const wrapperBody = $(".wrapper__body");
const input = $(".wrapper__input");
const removeAll = $(".wrapper__del");
var contents = ["ReactJs", "NodeJs"];

function render() {
  wrapperBody.innerHTML = "";
  for (i = 0; i < contents.length; i++) {
    const content = contents[i];
    wrapperBody.innerHTML += `
    <span class="wrapper__content"
    >${content}
    <i class="fa-solid fa-xmark" onclick = delContent(${i})></i>
    </span>
    `;
  }
  wrapperBody.appendChild(input);
  input.focus();
}

input.onkeydown = function (e) {
  if (e.which == 13) {
    console.log(input.value.trim() != "");
    if (input.value.trim() != "" && !contents.includes(input.value.trim()))
      contents.push(input.value.trim());
    render();
    input.value = "";
  }
};

function delContent(index) {
  contents.splice(index, 1);
  render();
}

removeAll.onclick = function (e) {
  contents = [];
  render();
};

render();
