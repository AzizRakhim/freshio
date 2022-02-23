let elMSearchBtn = document.getElementById("mSearchBtn");
let elSearchBox = document.getElementById("searchBox");
let elSearchIcon = document.getElementById("searchIcon");
let elCanvasBtn = document.getElementById("canvasBtn");
let elCanvasBox = document.getElementById("canvasBox");
let elBackBtn = document.getElementById("backBtn");
let elCanvasBtnTwo = document.getElementById("canvasBtnTwo");
let elBackBtnTwo = document.getElementById("backBtnTwo");
let elCanvasBtnThree = document.getElementById("canvasBtnThree");
let elBackBtnThree = document.getElementById("backBtnThree");
let count = 0;

elMSearchBtn.addEventListener("click", function() {
  elSearchBox.classList.toggle("where-it");
  if (count == 0){
    elSearchIcon.className = "bx bx-x";
    count++;
  } else{
    elSearchIcon.className = "bx bx-search";
    count--;
  }
})

elCanvasBtn.addEventListener("click", function(){
  elCanvasBox.classList.add("show-them");
})

elBackBtn.addEventListener("click", function() {
  elCanvasBox.classList.remove("show-them")
})

elCanvasBtnTwo.addEventListener("click", function(){
  elCanvasBox.classList.add("show-them");
})

elBackBtnTwo.addEventListener("click", function() {
  elCanvasBox.classList.remove("show-them")
})

elCanvasBtnThree.addEventListener("click", function(){
  elCanvasBox.classList.add("show-them");
})

elBackBtnThree.addEventListener("click", function() {
  elCanvasBox.classList.remove("show-them")
})