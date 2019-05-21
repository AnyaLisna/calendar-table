'use strict';

function createCalendar(id, year, month) {

  const table = document.createElement('table');
  const tr = document.createElement('tr');
  const weekDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const date = new Date(year, month - 1); // создает дату
  let firstDayMonth = date.getDay(); // получаем число пустых ячеек до первого дня
  firstDayMonth = firstDayMonth === 0 ? 6 : firstDayMonth - 1;
  const lastDayMonth = new Date(year, month, 0).getDate(); //количество дней в месяце

  // создаем и заполняем оглавление таблицы
  document.getElementById(id).appendChild(table);
  table.appendChild(tr);
  weekDay.forEach(dayName => {
    const th = document.createElement('th');
    tr.appendChild(th);
    th.appendChild(document.createTextNode(dayName));
  });

  //создает ячейки и заполняем числами

  let day = 1 - firstDayMonth;

  while (day <= lastDayMonth) {
    const week = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const td = document.createElement('td');
      if (day > 0 && day <= lastDayMonth) {
        td.innerHTML = day;
      }
      day++;
      week.append(td);
    }
    table.append(week);
  }
}

createCalendar('cal', 2019, 9);
