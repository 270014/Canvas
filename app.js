var c1 = document.getElementById("one");
var ctx1 = c1.getContext ("2d");
ctx1.beginPath();
ctx1.strokeStyle="cyan";
ctx1.moveTo(0,0);
ctx1.lineTo(150,150);
ctx1.lineTo(0,300);
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle="blue";
ctx1.fill();

ctx1.beginPath();
ctx1.moveTo(300,300);
ctx1.lineTo(150,150);
ctx1.lineTo(300,0);
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle="blue";
ctx1.fill();


var c2 = document.getElementById("two");
var ctx2 = c2.getContext ("2d");
ctx2.beginPath();
ctx2.strokeStyle="red";
ctx2.moveTo(150,25);
ctx2.lineTo(225,150);
ctx2.lineTo(150,275);
ctx2.lineTo(75,150);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle="red";
ctx2.fill();

var c3 = document.getElementById("three");
var ctx3 = c3.getContext ("2d");
ctx3.beginPath();
ctx3.strokeStyle = "blue";
ctx3.moveTo(0,0);
ctx3.lineTo(300,300);
ctx3.lineTo(300,150);
ctx3.lineTo(0,150);
ctx3.lineTo(0,0);
ctx3.moveTo(150,150);
ctx3.lineTo(150,300);
ctx3.lineTo(0,300);
ctx3.lineTo(300,0);
ctx3.lineTo(150,0);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle="blue";
ctx3.fill();

var c4 = document.getElementById("four");
var ctx4 = c4.getContext ("2d");
ctx4.beginPath();
ctx4.strokeStyle = "grey";
ctx4.moveTo(150,50);
ctx4.lineTo(200,200);
ctx4.arc(150,200,50,0,3.14);
ctx4.lineTo(150,50);
ctx4.stroke();
ctx4.fillStyle="silver";
ctx4.fill();








