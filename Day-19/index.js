document.getElementById("addBoxBtn").addEventListener("click", function() {
const box2 = document.getElementById("box2");

const newBox = box2.cloneNode(true);
newBox.removeAttribute("id");
newBox.style.display = "block";

document.querySelector(".groups").appendChild(newBox);
});
alert("NOT: devamını yapıcağım bu sadece tasarımı göstermeliktir.")