document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("box").style.height = "250px";
});

document.getElementById("button2").addEventListener("click", function(){
  document.getElementById("box").style.backgroundColor = "blue";
});

var fadeButton = document.getElementById("button3");
var fadeBox = document.getElementById("box");

fadeButton.onclick = function () {
  fadeBox.style.opacity = 0.3;
  console.log("click");
}

document.getElementById("button4").addEventListener("click", function(){
  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.color = "orange";
});
