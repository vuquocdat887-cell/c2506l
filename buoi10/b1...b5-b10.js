const ND = document.getElementsByClassName("qwe")[0];
const doi = document.getElementsByClassName("wer")[0];

doi.addEventListener("click", () => {
  ND.textContent = "Chào bạn đến với JavaScript DOM";
});

const red = document.getElementsByClassName("do")[0];
const xanh = document.getElementsByClassName("xanh")[0];
const vang = document.getElementsByClassName("vang")[0];

red.addEventListener("click", () => {
  ND.style.background = "red";
});
xanh.addEventListener("click", () => {
  ND.style.background = "blue";
});
vang.addEventListener("click", () => {
  ND.style.background = "yellow";
});

const an = document.getElementsByClassName("an")[0];
const hien = document.getElementsByClassName("hien")[0];

an.addEventListener("click", () => {
  ND.style.display = "none";
});
hien.addEventListener("click", () => {
  ND.style.display = "block";
});

const them=document.getElementsByClassName("them")[0];
them.addEventListener("click", () => {
  const moi = document.createElement("li");
  moi.textContent = "Item mới";
  document.querySelector("ul").appendChild(moi);
});

const chao = document.getElementsByClassName("chao")[0];
chao.addEventListener("click", () => {
   const name = document.getElementById("name").value;
   alert("Xin chào, " + name);
});
