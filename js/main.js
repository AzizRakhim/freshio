let elMSearchBtn = document.getElementById("mSearchBtn");
let elSearchBox = document.getElementById("searchBox");
let elSearchIcon = document.getElementById("searchIcon");
let elCanvasBtn = document.getElementById("canvasBtn");
let elCanvasBox = document.getElementById("canvasBox");
let elBackBtn = document.getElementById("backBtn");
let elCanvasBtnTwo = document.getElementById("canvasBtnTwo");
let elCanvasBoxTwo = document.getElementById("canvasBoxTwo");
let elBackBtnTwo = document.getElementById("backBtnTwo");
let elCanvasBtnThree = document.getElementById("canvasBtnThree");
let elCanvasBoxThree = document.getElementById("canvasBoxThree");
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
  elCanvasBoxTwo.classList.add("show-them");
})

elBackBtnTwo.addEventListener("click", function() {
  elCanvasBoxTwo.classList.remove("show-them")
})

elCanvasBtnThree.addEventListener("click", function(){
  elCanvasBoxThree.classList.add("show-them");
})

elBackBtnThree.addEventListener("click", function() {
  elCanvasBoxThree.classList.remove("show-them")
})

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {

  const up = document.getElementById("up");

  if (document.documentElement.scrollTop > 1) {
    up.classList.add("pa-up");
  } 
  else {
    up.classList.remove("pa-up");
  }
} 
