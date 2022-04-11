document.getElementById("shroomish").addEventListener("click",flip);
function flip() {
  let img = document.getElementById("shroomish");
  if(img.style.transform == "scaleY(-1)") {
    img.style.transform = "none";
  }
  else {
    img.style.transform = "scaleY(-1)";
  }
}