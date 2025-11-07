function menuShow() {
  let menuMobile = document.querySelector(".mobileMenu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "img/menu-white.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "img/fecha-menu.svg";
  }
}

let itens = document.querySelectorAll(".carrossel .itemCarrossel");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let ativo = 3;
function loadShow() {
  let stt = 0;
  itens[ativo].style.transform = `none`;
  itens[ativo].style.zIndex = 1;
  itens[ativo].style.filter = `none`;
  //itens[ativo].style.opacity = 1;
  for (var i = ativo + 1; i < itens.length; i++) {
    stt++;
    itens[i].style.transform = `translateX(${160 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    itens[i].style.zIndex = stt;
    itens[i].style.filter = `blur(5px)`;
    itens[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = ativo - 1; i >= 0; i--) {
    stt++;
    itens[i].style.transform = `translateX(${-150 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    itens[i].style.zIndex = stt;
    itens[i].style.filter = `blur(5px)`;
    itens[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
itens.forEach((item, index) => {
  item.addEventListener("click", function () {
    ativo = index;
    loadShow();
  });
});
