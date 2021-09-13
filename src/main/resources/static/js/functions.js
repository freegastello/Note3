document.addEventListener('DOMContentLoaded', function () {

  // Использование: $('.box');
  // const $ = function(element) {
  //   return document.querySelectorAll(element);
  // };

  // addEventListener("click", function () {
  //   console.log("Щёлк!");
  // });

  document.querySelector('#color').addEventListener('mousedown', () => {
    printForEachElement();
  });

  document.querySelector('#but1').addEventListener('mousedown', () => {
    insertStyle();
  });

  document.querySelector('#but2').addEventListener('mousedown', () => {
    removeStyle();
  });

  document.querySelector('#but3').addEventListener('mousedown', () => {
    toggleStyle();
  });



}, false);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Замена класса
// Вариант 1:
function insertStyle() {
  const insertElem = document.getElementById('ttt');
  insertElem.classList.add('wrap');
}

function removeStyle() {
  const removeElem = document.getElementById('ttt');
  removeElem.classList.remove('wrap');
}

function toggleStyle() {
  const toggleElem = document.getElementById('ttt');
  toggleElem.classList.toggle('toggle');
}


// Вариант 2:
function printForEachElement() {
  const arrayBoxes = document.querySelectorAll('.box');

  // Можно так:
  // arrayBoxes.forEach(function(el){
  //   console.log(el.tagName);//DIV
  //   console.log(el.className);//box
  //   console.log(el.textContent);//Рассветка текста 1, Рассветка текста 2, Рассветка текста 3
  // });

  // И так можно:
  arrayBoxes.forEach(function(item, i, arrayBoxes) {
    console.log( i + ": " + item.textContent);//0: Рассветка текста 1, 1: Рассветка текста 2, 2: Рассветка текста 3
    arrayBoxes[i].classList.toggle('toggle');
  });
}










