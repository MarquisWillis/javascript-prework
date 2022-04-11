// declaring variable box: calling HTML box to be altered by buttons
var phaseBox = document.getElementById("box");

// declaring variables button(1-4): calling HTML buttons to alter box
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

// telling button1 that when clicked upon, tell the box to increase height to 250px 
button1.addEventListener("click", function(){
  phaseBox.style.height = "250px";
});

// telling button2 that when clicked upon, tell box to restyle background color to blue
button2.addEventListener("click", function(){
  phaseBox.style.backgroundColor = "blue";
});

// telling button3 that when clicked upon, tell box to resytle opacity for fade effect
button3.onclick = function () {
  phaseBox.style.opacity = 0.3;
}

// telling button4 that when clicked upon, tell box to reset to default parameters 
button4.addEventListener("click", function(){
  phaseBox.style.height = "150px";
  phaseBox.style.backgroundColor = "orange";
  phaseBox.style.opacity = 1;
});
