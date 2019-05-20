function createCalendar(id, year, month) {
    id = document.getElementById(id);
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const weekDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  
    const date = new Date(year, month - 1); // создает дату
    const firstEmptyCell = date.getDay() - 2; // получаем число пустых ячеек до первого дня
    const lastDayMonth = new Date(year, month, 0).getDate() + 1;  //кодичество дней в месяце
  
    // создаем и заполняем оглавление таблицы
    id.appendChild(table);
    table.appendChild(tr);
    weekDay.forEach(dayName => {
      const th = document.createElement('th');
      tr.appendChild(th);
      th.appendChild(document.createTextNode(dayName));
    });
  
    // создаем строки
    table.appendChild(tr.cloneNode(false));
  
    //создает ячейки и заполняем числами
    for (let i = 1; i <= firstEmptyCell + lastDayMonth; i++) {
      table.lastChild.appendChild(td.cloneNode(true));
      td.innerHTML = (i <= firstEmptyCell ? '' : i - firstEmptyCell);
  
      //создаем переносы
      if (i % 7 === 0) {
        table.appendChild(tr.cloneNode(false));
      }
    }
  
    // узнаём недостающие пустые ячейки
    const lastEmptyCell = 7 - table.lastChild.childNodes.length;
  
    // добавляем пустые ячейки в конце
    for (let j = 0; j < lastEmptyCell; j++) {
      table.lastChild.appendChild(td.cloneNode(false));
    }
  }
  
  createCalendar('cal', 2019, 2);
  