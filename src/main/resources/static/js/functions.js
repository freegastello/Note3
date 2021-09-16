document.addEventListener('DOMContentLoaded', function () {

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

function insertTable(list) {
  const insTable = document.querySelector('#insertTable');

// Внутри: 222 -> 444 -> 333 -> 222 -> 111

// before      – вставляет узлы или строки до node;          - Перед элементом
// prepend     – вставляет узлы или строки в начало node;    - Внутри сразу после выбранного элемента(перед вторым внутренним)
// append      – вставляет узлы или строки после node;       - Внутри самый последний у конца выбранного элемента(перед последним внутренним)
// after       – вставляет узлы или строки после node;       - После выбранного элемента
// replaceWith – заменяет node заданными узлами или строками.-



  // const p = document.createElement('p');
  // p.id = 'this333';
  // p.innerHTML = '333';
  // insTable.append(p);


  // list.forEach(e => insTable.append(e));//
  // list.forEach(e => console.log(e));// В консоль выводит идеально


  // var newElem = document.createElement('table');
  // newElem.id = 'myTable';
  // // insTable.append(newElem);
  //
  // var newRow;
  // for (var i = 0; i < list.length; i++) {
  //   debugger;
  //   newRow = newElem.insertRow(i);
  //   for (var j = 0; j < 1; j++) {
  //     debugger;
  //     var newCell = newRow.insertCell(i);
  //     newCell.innerHTML = list[i].id;
  //     newCell.innerHTML = list[i].name;
  //   }
  // }
  // insTable.append(newElem);


  // var tbody = document.querySelector('myTable');

  // let html = '<table>';
  // for(var i = 0; i < list.length; i++)
  // {
  //   var tr = document.createElement('tr');
  //   tr.innerHTML =
  //     '<td>' + list[i].id + '</td>' +
  //     '<td>' + list[i].name + '</td>';
  //   html += tr;
  // }
  // html += '</table>';
  // // insTable.append(html);
  // document.getElementById('insertTable').innerHTML=html;


  // // Создание таблицы - работает
  // var newElem = document.createElement('table');
  // var newRow = newElem.insertRow(0);
  // var newCell = newRow.insertCell(0);
  // newCell.innerHTML = list[0].name;
  // var newCell = newRow.insertCell(1);
  // newCell.innerHTML = list[1].name;
  // insTable.append(newElem);



  // //
  // const p7 = document.createElement('p');
  // p7.id = 'this777';
  // p7.innerHTML = '777';
  // insertTable.after(p7);// Снаружи внизу
  //
  //   //
  // const p3 = document.createElement('p');
  // p3.id = 'this333';
  // p3.innerHTML = '333';
  // // insertTable.parentNode.append(p3);// внутри аналог 222
  // insertTable.append(p3);// Внутри самый последний
  //
  // // Это аналогично 333
  // const p2 = document.createElement('p');
  // p2.id = 'this222';
  // p2.innerHTML = '222';
  // insertTable.appendChild(p2);// // Внутри самый последний аналог 333
  //
  // //
  // const p9 = document.createElement('p');
  // p9.id = 'thisAppendChild';
  // p9.innerHTML = 'appendChild';
  // insertTable.parentNode.appendChild(p9);// Самый конец документа
  //
  // //
  // const p4 = document.createElement('p');
  // p4.id = 'this444';
  // p4.innerHTML = '444';
  // insertTable.prepend(p4);// Внутри самый первый
  //
  // //
  // const p5 = document.createElement('p');
  // p5.id = 'this555';
  // p5.innerHTML = '555';
  // insertTable.before(p5);// Перед выбранным элементом
  //
  // //
  // const p = document.createElement('p');
  // p.id = 'this111';
  // p.innerHTML = 'insertBefore';
  // insertTable.parentNode.insertBefore(p, insertTable);// Вставка перед выбранным документом

}



function createTable(tbody, list) {
  list.forEach(function(items) {
    var tr = document.createElement('tr');
    var tdId = document.createElement('td');
    var tdCreateDateTime = document.createElement('td');
    var tdName = document.createElement('td');
    var tdYear = document.createElement('td');
    var tdLastSaveDateTime = document.createElement('td');

    tdId.innerText = items.id;
    tdCreateDateTime.innerText = items.createDateTime;
    tdName.innerText = items.name;
    tdYear.innerText = items.year;
    tdLastSaveDateTime.innerText = items.lastSaveDateTime;

    tr.appendChild(tdId);
    tr.appendChild(tdCreateDateTime);
    tr.appendChild(tdName);
    tr.appendChild(tdYear);
    tr.appendChild(tdLastSaveDateTime);

    tbody.appendChild(tr);
  });
}


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
  arrayBoxes.forEach(function (item, i, arrayBoxes) {
    console.log(i + ": " + item.textContent);//0: Рассветка текста 1, 1: Рассветка текста 2, 2: Рассветка текста 3
    arrayBoxes[i].classList.toggle('toggle');
  });
}










