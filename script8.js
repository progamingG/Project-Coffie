const black = document.querySelector(".black-1");
const header = document.querySelector("header");
const bg = document.getElementById("section-1");
console.log(black);
function beli() {
  let cek = black.classList.toggle("activ");
  if (cek === true) {
    bg.style.filter = (20px)";
    document.body.style.overflowY = "hidden";
  } else {
    bg.style.filter = "blur(0px)";
    document.body.style.overflowY = "scroll";
  }
  // document.body.style.backgroundColor = "black";
}
window.addEventListener("scroll", function () {
  header.classList.toggle("header", this.window.scrollY > 0);
});
const input = document.getElementById("inputtt");
// function keluar() {
//   let text = input.value;
//   if (text === "") {
//     input.style.width = +"%";
//   } else {
//     input.style.width = 100 + "%";
//   }
// }

const sec1 = document.getElementById("section-6-1");
const sec2 = document.getElementById("section-6-2");

const pems = document.getElementsByClassName("pem1");

for (let i = 0; i < pems.length; i++) {
  pems[i].addEventListener("click", function () {
    if (pems[i].textContent === "Drings") {
      pems[0].style.fontWeight = `bold`;
      pems[1].style.fontWeight = `lighter`;
      pems[2].style.fontWeight = `lighter`;
      setTimeout(() => {
        sec1.style.visibility = "visible";
      }, 500);
      sec2.style.visibility = "hidden";
      console.log("hallo");
    } else if (pems[i].textContent === "Meals") {
      pems[0].style.fontWeight = `lighter`;
      pems[1].style.fontWeight = `bold`;
      pems[2].style.fontWeight = `lighter`;
      setTimeout(() => {
        sec2.style.visibility = "visible";
      }, 400);
      sec1.style.visibility = "hidden";
    } else {
      pems[0].style.fontWeight = `lighter`;
      pems[1].style.fontWeight = `lighter`;
      pems[2].style.fontWeight = `bold`;
    }
  });
}

//
var swiper = new Swiper(".mySwiper", {
  loop: true,

  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
