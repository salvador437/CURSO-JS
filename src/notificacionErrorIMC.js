// Obtener elementos del DOM
const modal = document.getElementById("myModal");
// const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
  modal.style.display = "none";
  open("./index.htm", target="_self"   );
};