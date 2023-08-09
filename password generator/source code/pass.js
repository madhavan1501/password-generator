const start = document.querySelector(".front-page-start");
const front_page = document.querySelector(".front-page");
const back = document.querySelector("#back-btn");
const burger = document.querySelector(".burger");
const slide = document.querySelector(".slide-bar");
const exitbtn = document.querySelector(".exitbtn");
const box = document.querySelectorAll(".box");
const logo = document.querySelector(".logo");
const footer = document.querySelector(".footer");
const circle = document.querySelector(".circle");
const stop = document.querySelector(".stop");
const load = document.querySelector(".load");
const time = document.querySelector(".time");
const copy = document.querySelector(".copy");
const redbull = document.querySelector(".redbull");
const output = document.querySelector(".output");
start.addEventListener("click", () => {
  front_page.style.height = "0";
});
burger.addEventListener("click", () => {
  slide.style.width = "70%";
  slide.style.padding = "1%";
});
back.addEventListener("click", () => {
  slide.style.width = "0";
  slide.style.padding = "0";
});
exitbtn.addEventListener("click", () => {
  front_page.style.height = "100%";
  logo.removeAttribute("value");
  setTimeout(() => {
    slide.style.width = "0";
    slide.style.padding = "0";
    cancel();
  }, 2000);
});
box.forEach((e) => {
  e.addEventListener("click", () => {
    boxclicked(e);
  });
});
function boxclicked(e) {
  const src = e.lastElementChild.getAttribute("src");
  const value = e.lastElementChild.getAttribute("value");
  logo.setAttribute("src", src);
  logo.setAttribute("value", value);
}

function createpassword(n) {
  let pass = "";
  for (let i = 0; i < n; i++) {
    pass += String.fromCharCode(Math.floor(Math.random() * 90 + 32));
  }
  if (n) return pass;
  else return "select length";
}
circle.addEventListener("click", () => {
  footer.classList.add("loading");
  load.style.setProperty("--ani", "range 4s ease-out");
  redbull.classList.add("active");
  output.textContent = "ஒரு லைக் போடுங்கள்";
  setTimeout(() => {
    footer.classList.remove("loading");
    redbull.classList.remove("active");
    footer.classList.add("cancel");
    stop.style.setProperty("animation", "orange 6s linear infinite");
    copy.style.setProperty("animation", "green 6s linear infinite");
    output.textContent = createpassword(logo.getAttribute("value"));
    let s = 0;
    s = sec(s);
    t = setInterval(() => {
      s = sec(s);
    }, 1000);
  }, 4000);
});
stop.addEventListener("click", cancel);
copy.addEventListener("click", () => {
  const out = output.textContent;
  navigator.clipboard.writeText(out);
  alert("code copied ~");
});

function cancel() {
  footer.classList.remove("cancel");
  load.style.removeProperty("--ani");
  output.textContent = "வணக்கம் ~ நன்பா";
  clearInterval(t);
}
function sec(s) {
  time.textContent = `00:00:${9 < s ? s : "0" + s}`;
  s++;
  if (s == 60) {
    s = 0;
  }
  return s;
}
