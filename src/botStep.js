/*
  Обработка хода компьютера
*/

import pole from "./pole";
import canEatBot from './canEat'

let doBotStep = function (a, b) {
  // Делает ход компьютера
  //console.log(a, b);

  if (pole[b[0]][b[1]].player !== 0 || pole[b[0]][b[1]].player === undefined) return false; // Если на А нет игрока или игрок не бот, ошибка

  pole[a[0]][a[1]].player = 0;
  pole[b[0]][b[1]].player = 2;

  let c = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; // Вычисление шашки, которую съедят

  //console.log(c);

  if (
    Number.isInteger(c[0]) &&
    Number.isInteger(c[1]) &&
    c[0] !== 0 &&
    c[1] !== 0
  ) {
    pole[c[0]][c[1]].player = 0;
  }
};

export default function(a, b) {
  // Расчет хода компьютера

  let steps = []; //Все возможные ходы бота

  for (let i = 0; i < 9; i++) {
    //Ищем все возможные ходы и добавляем их в массив
    for (let j = 0; j < 9; j++) {
      if (pole[j][i].player !== 2) continue;

      for (let z = 0; z < pole[j][i].lines.length; z++) {
        let a = pole[j][i].lines[z][0];
        let b = pole[j][i].lines[z][1];

        if (pole[a][b].player === 0) { // Если место В пустое, добавляем его в массив возможных ходов
          steps.push({
            a: [j, i],
            b: [a, b],
            canEat: false
          });
        }

        if (pole[a][b].player === 1) { // Если на В игрок, узнаем, можем ли его съесть
          let w, h; //w - строка, h - столбец
          if ((a - j) < 0) w = a - 1; else w = a + 1; // Вычисляем координаты после съедения по диагонали
          if ((b - i) < 0) h = b - 1; else h = b + 1;

          if (a == j) w = a; // Вычисляем координаты после съедения по горизонтали
          if (b == i) h = b;

          //if (Math.abs(j - w) >= 2 || Math.abs(i - h) >= 2) continue;

          console.log('Шашка врага: ', a, b, 'Следующая', w,h);
          
          if (canEatBot([j, i], [w, h])) {
            steps.push({
              a: [j, i],
              b: [w, h],
              canEat: true
            });
          }
        }
      }
    }
  }

  let stepsEat = steps.filter(function (step) {
    return step.canEat === true;
  });

  console.log(steps);
  console.log(stepsEat);

  if (stepsEat.length === 0) {
    let min = 0;
    let max = steps.length - 1;
    let step = Math.round(min - 0.5 + Math.random() * (max - min + 1));

    let x1 = steps[step].a[0];
    let y1 = steps[step].a[1];
    let x2 = steps[step].b[0];
    let y2 = steps[step].b[1];

    doBotStep([x1, y1], [x2, y2]);
  } else {
    let min = 0;
    let max = stepsEat.length - 1;
    let step = Math.round(min - 0.5 + Math.random() * (max - min + 1));

    let x1 = stepsEat[step].a[0];
    let y1 = stepsEat[step].a[1];
    let x2 = stepsEat[step].b[0];
    let y2 = stepsEat[step].b[1];

    doBotStep([x1, y1], [x2, y2]);
  }
}
