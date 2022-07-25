const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var username = $("#username");
var email = $("#email");
var password = $("#password");
var confirmPassword = $("#password2");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Khong duoc de trong");
    } else {
      showSuccess(input);
    }
  });
}

function checkInput() {}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  input.value = input.value.trim();
  if (regexEmail.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Điền đúng email");
    return false;
  }
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Không thể ít hớn ${min} kí tự`);
    return false;
  } else if (input.value.length > max) {
    showError(input, `Không thể lớn hớn ${max} kí tự`);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function checkPassError(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Mật khẩu không trùng");
    return false;
  } else {
    showSuccess(confirmPassword);
    return true;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmail = checkEmailError(email);
  let isUser = checkLengthError(username, 5, 12);
  let isPassword = checkLengthError(password, 5, 10);
  let isConfirmPassword = checkPassError(password, confirmPassword);

  if (isEmail && isUser && isPassword && isConfirmPassword) {
    console.log("gui");
  } else {
    console.log("no");
  }
});
