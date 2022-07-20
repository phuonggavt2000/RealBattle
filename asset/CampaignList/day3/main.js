const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgs = $$(".img img");
const gallery = $(".gallery");
const galleryImg = $(".gallery__img img");
const next = $(".next");
const prev = $(".prev");
const close = $(".close");
var currentIndex = 0;

function showGallery() {
  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }

  if (currentIndex == imgs.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }

  galleryImg.src = imgs[currentIndex].src;
  gallery.classList.add("show");
}

imgs.forEach((img, index) => {
  img.onclick = function () {
    currentIndex = index;
    showGallery();
  };
});

close.onclick = function () {
  gallery.classList.remove("show");
};

document.onkeydown = function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
};

prev.onclick = function () {
  currentIndex--;
  showGallery();
};

next.onclick = function () {
  currentIndex++;
  showGallery();
};
