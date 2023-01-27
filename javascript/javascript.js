var Dare1=document.getElementById('content2');
var Dare2=document.getElementById('content3');
var Truth2=document.getElementById('content1');
var Truth1=document.getElementById('content4');



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
}

document.addEventListener("dblclick",getQuest);