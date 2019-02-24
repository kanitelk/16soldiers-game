/*
  Проверка условий выигрыша
  Анализ ходов
  Оценочная функция
*/

import pole from "./pole";
import canEat from "./canEat";

export default function () {
  var count1 = 0,
    count2 = 0; //Живых шашек у 1 и 2 игроков
  var steps1 = [],
    steps2 = []; // Ходы 1 и 2 игроков

  // 1 игрок
  for (let i = 0; i < 9; i++) {
    //Ищем все возможные ходы и добавляем их в массив
    for (let j = 0; j < 9; j++) {
      if (pole[j][i].player !== 1) continue;
      count1++;

      for (let z = 0; z < pole[j][i].lines.length; z++) {
        let a = pole[j][i].lines[z][0];
        let b = pole[j][i].lines[z][1];

        if (pole[a][b].player === 0) {
          // Если место В пустое, добавляем его в массив возможных ходов
          steps1.push({
            a: [j, i],
            b: [a, b],
            canEat: false
          });
        }

        if (pole[a][b].player === 2) {
          // Если на В игрок, узнаем, можем ли его съесть
          let w, h; //w - строка, h - столбец
          if (a - j < 0) w = a - 1;
          else w = a + 1; // Вычисляем координаты после съедения по диагонали
          if (b - i < 0) h = b - 1;
          else h = b + 1;

          if (a == j) w = a; // Вычисляем координаты после съедения по горизонтали
          if (b == i) h = b;

          //if (Math.abs(j - w) >= 2 || Math.abs(i - h) >= 2) continue;

          // console.log('Шашка врага: ', a, b, 'Следующая', w,h);

          if (canEat([j, i], [w, h])) {
            //Если можем есть, добавляем ход в массив возможных ходов
            steps1.push({
              a: [j, i],
              b: [w, h],
              canEat: true
            });
          }
        }
      }
    }
  }

  //2 игрок
  for (let i = 0; i < 9; i++) {
    //Ищем все возможные ходы и добавляем их в массив
    for (let j = 0; j < 9; j++) {
      if (pole[j][i].player !== 2) continue;
      count2++;

      for (let z = 0; z < pole[j][i].lines.length; z++) {
        let a = pole[j][i].lines[z][0];
        let b = pole[j][i].lines[z][1];

        if (pole[a][b].player === 0) {
          // Если место В пустое, добавляем его в массив возможных ходов
          steps2.push({
            a: [j, i],
            b: [a, b],
            canEat: false
          });
        }

        if (pole[a][b].player === 1) {
          // Если на В игрок, узнаем, можем ли его съесть
          let w, h; //w - строка, h - столбец
          if (a - j < 0) w = a - 1;
          else w = a + 1; // Вычисляем координаты после съедения по диагонали
          if (b - i < 0) h = b - 1;
          else h = b + 1;

          if (a == j) w = a; // Вычисляем координаты после съедения по горизонтали
          if (b == i) h = b;

          //if (Math.abs(j - w) >= 2 || Math.abs(i - h) >= 2) continue;

          // console.log('Шашка врага: ', a, b, 'Следующая', w,h);

          if (canEat([j, i], [w, h])) {
            //Если можем есть, добавляем ход в массив возможных ходов
            steps2.push({
              a: [j, i],
              b: [w, h],
              canEat: true
            });
          }
        }
      }
    }
  }

  if (count1 === 0 || steps1.length === 0) {
    alert("Красные победили!");
  }

  if (count2 === 0 || steps2.length === 0) {
    alert("Зеленые победили!");
  }
  document.getElementById('green').innerText = count1;
  document.getElementById('red').innerText = count2;
  //console.log('Красные. ', 'Ходов: ', steps2.length, '  Живых шашек: ', count2);
  //console.log('Зеленые. ', 'Ходов: ', steps1.length, '  Живых шашек: ', count1);
};
