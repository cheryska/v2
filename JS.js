const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");
const n6 = document.getElementById("n6");
const n7 = document.getElementById("n7");
const n8 = document.getElementById("n8");
const n9 = document.getElementById("n9");
const n0 = document.getElementById("n0");
const elements = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n0];

const dot = document.getElementById("dot");
const del = document.getElementById("del");
const sPlus = document.getElementById("sPlus");
const sMinus = document.getElementById("sMinus");
const sMnoz = document.getElementById("sMnoz");
const sDziel = document.getElementById("sDziel");

const finishHim = document.getElementById("finishHim");

let over = document.getElementById("over");
let h321 = document.getElementById("out");
let h3211 = document.getElementById("out1");
let symbolOut = document.getElementById("symbolOut");

sPlus.addEventListener("click", function () {
  symbolOut.innerHTML = "+";
});
sMinus.addEventListener("click", function () {
  symbolOut.innerHTML = "-";
});
sMnoz.addEventListener("click", function () {
  symbolOut.innerHTML = "*";
});
sDziel.addEventListener("click", function () {
  symbolOut.innerHTML = "/";
});

elements.forEach((element) => {
  element.addEventListener("click", handleClick);
});

function handleClick() {
  let numeroDuo;
  let trio;
  if (symbolOut.innerHTML === "") {
    numeroDuo = h321.innerText;
    h321.innerHTML = numeroDuo + this.innerText;
  } else {
    trio = h3211.innerText;
    h3211.innerHTML = trio + this.innerText;
  }
}

finishHim.addEventListener("click", function () {
  const x = parseInt(h321.innerText);
  const y = parseInt(h3211.innerText);
  const sym = symbolOut.innerText;

  if (sym === "+") {
    over.innerHTML = x + y;
  } else if (sym === "-") {
    over.innerHTML = x - y;
  } else if (sym === "*") {
    over.innerHTML = x * y;
  } else if (sym === "/") {
    over.innerHTML = x / y;
  }
});

del.addEventListener("click", function () {
  h321.innerHTML = "";
  h3211.innerHTML = "";
  over.innerHTML = "";
  symbolOut.innerHTML = "";
});
