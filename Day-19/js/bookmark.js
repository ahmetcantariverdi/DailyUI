document.getElementById("addBoxBtn").addEventListener("click", function() {
  const boxCuisine = document.getElementById("boxCuisine");
  const newBox = boxCuisine.cloneNode(true);

  newBox.removeAttribute("id");
  newBox.style.display = "block";

  document.querySelector(".groups").appendChild(newBox);
});