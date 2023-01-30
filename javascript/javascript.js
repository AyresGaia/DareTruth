var Dare1=document.getElementById('content2');
var Dare2=document.getElementById('content3');
var Truth2=document.getElementById('content1');
var Truth1=document.getElementById('content4');

var D1=document.getElementById('i2');
var D2=document.getElementById('i3');
var T2=document.getElementById('i1');
var T1=document.getElementById('i4');
var all_DT=document.getElementsByClassName('item');
const quest=[D1,D2,T1,T2];

var container=document.getElementById("container");

var agree=document.getElementById("Rules");
var btn=document.getElementById("agree");
var Rules=document.getElementById("Help");

var mode=document.getElementById("mode");
var link=document.createElement("link");
link.href="style/style2.css";
link.type = "text/css";
link.rel="stylesheet";



function getTruth1(){
  fetch('content/Truth1.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n');
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    Truth1.innerHTML = randomLine;
  });
}


function getTruth2(){
  fetch('content/Truth2.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n');
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    Truth2.innerHTML = randomLine;
  });
}

function getDare1(){
  fetch('content/Dare2.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n');
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    Dare1.innerHTML = randomLine;
  });
}


function getDare2(){
  fetch('content/Dare2.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n');
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    Dare2.innerHTML = randomLine;
  });
}

function getQuest(){
  getDare1();
  getDare2();
  getTruth1();
  getTruth2();
  for (var i = 0; i < quest.length; i++) {
    quest[i].style.boxShadow = "5px 10px 10px 10px black";
  }
  const RElement = quest[Math.floor(Math.random() * quest.length)];
  RElement.style.boxShadow="5px 10px 10px 10px blue";
  RElement.scrollIntoView({behavior:"smooth"});
}

function agreement_open(){
  agree.style.display="block";
}


function agreement_close(){
  agree.style.display="none";
}

function add_mode1(){
    document.head.appendChild(link);
    alert("Website is still in construction");
}


Rules.onclick=agreement_open;
btn.onclick=agreement_close;

mode.onclick=add_mode1;

container.addEventListener("dblclick",getQuest);
