import "./css/style.scss";
import p5 from "p5";

let pole = [];
let state = [];

for (let i = 0; i < 9; i++) {
  //Задаем двумерный массив для поля
  pole[i] = [];
  for (let j = 0; j < 9; j++) {
    pole[i][j] = 1;
  }
}

function removeDots(pole) {
  const dotValue = 0;
  pole[0][0] = dotValue;
  pole[0][1] = dotValue;
  pole[0][3] = dotValue;
  pole[0][5] = dotValue;
  pole[0][7] = dotValue;
  pole[0][8] = dotValue;

  pole[1][0] = dotValue;
  pole[1][1] = dotValue;
  pole[1][2] = dotValue;
  pole[1][6] = dotValue;
  pole[1][7] = dotValue;
  pole[1][8] = dotValue;

  pole[2][1] = dotValue;
  pole[2][7] = dotValue;

  pole[3][0] = dotValue;
  pole[3][8] = dotValue;

  pole[5][0] = dotValue;
  pole[5][8] = dotValue;

  pole[6][1] = dotValue;
  pole[6][7] = dotValue;

  pole[7][0] = dotValue;
  pole[7][1] = dotValue;
  pole[7][2] = dotValue;
  pole[7][6] = dotValue;
  pole[7][7] = dotValue;
  pole[7][8] = dotValue;

  pole[8][0] = dotValue;
  pole[8][1] = dotValue;
  pole[8][3] = dotValue;
  pole[8][5] = dotValue;
  pole[8][7] = dotValue;
  pole[8][8] = dotValue;
  return pole;
}

function setDots(pole) {
  //0 string
  pole[0][2] = {
    player: 2,
    lines: [[1, 3], [0, 4]]
  };
  pole[0][4] = {
    player: 2,
    lines: [[1, 4], [0, 2], [0, 6]]
  };
  pole[0][6] = {
    player: 2,
    lines: [[1, 5], [0, 4]]
  };

  //1 string
  pole[1][3] = {
    player: 2,
    lines: [[0, 2], [1, 4]]
  };
  pole[1][4] = {
    player: 2,
    lines: [[1, 3], [0, 4], [1, 5], [2, 4]]
  };
  pole[1][5] = {
    player: 2,
    lines: [[1, 4], [2, 4]]
  };

  //2 string
  pole[2][0] = {
    player: 0,
    lines: [[4, 0], [3, 1]]
  };
  pole[2][2] = {
    player: 2,
    lines: [[3, 2], [3, 3], [2, 3]]
  };
  pole[2][3] = {
    player: 2,
    lines: [[2, 2], [2, 4], [3, 3]]
  };
  pole[2][4] = {
    player: 2,
    lines: [[1, 3], [1, 4], [1, 5], [2, 3], [3, 3], [3, 4], [3, 5], [2, 5]]
  };
  pole[2][5] = {
    player: 2,
    lines: [[3, 5], [2, 4], [2, 6]]
  };
  pole[2][6] = {
    player: 2,
    lines: [[3, 5], [2, 5], [3, 6]]
  };
  pole[2][8] = {
    player: 0,
    lines: [[3, 7], [4, 8]]
  };

  //3 string
  pole[3][1] = {
    player: 0,
    lines: [[2, 0], [4, 1], [4, 2]]
  };
  pole[3][2] = {
    player: 2,
    lines: [[2, 2], [3, 3], [4, 2]]
  };
  pole[3][3] = {
    player: 2,
    lines: [[2, 2], [2, 3], [2, 4], [3, 2], [4, 2], [4, 3], [4, 4]]
  };
  pole[3][4] = {
    player: 2,
    lines: [[3, 3], [3, 5], [2, 4], [4, 4]]
  };
  pole[3][5] = {
    player: 2,
    lines: [[2, 4], [2, 5], [2, 6], [3, 4], [3, 6], [4, 4], [4, 5], [4, 6]]
  };
  pole[3][6] = {
    player: 2,
    lines: [[3, 5], [2, 6], [4, 6]]
  };
  pole[3][7] = {
    player: 0,
    lines: [[2, 8], [4, 6], [4, 7]]
  };

  //4 string
  pole[4][0] = {
    player: 0,
    lines: [[2, 0], [6, 0], [4, 1]]
  };
  pole[4][1] = {
    player: 0,
    lines: [[3, 1], [5, 1], [4, 0], [4, 2]]
  };
  pole[4][2] = {
    player: 0,
    lines: [[3, 1], [4, 1], [5, 1], [3, 2], [3, 3], [4, 3], [5, 3], [5, 2]]
  };
  pole[4][3] = {
    player: 0,
    lines: [[4, 2], [3, 3], [4, 4], [5, 3]]
  };
  pole[4][4] = {
    player: 0,
    lines: [[3, 3], [3, 4], [3, 5], [4, 3], [4, 5], [5, 3], [5, 4], [5, 5]]
  };
  pole[4][5] = {
    player: 0,
    lines: [[3, 5], [5, 5], [4, 4], [4, 6]]
  };
  pole[4][6] = {
    player: 0,
    lines: [[3, 5], [3, 6], [3, 7], [4, 5], [4, 7], [5, 5], [5, 6], [5, 7]]
  };
  pole[4][7] = {
    player: 0,
    lines: [[4, 6], [4, 8], [3, 7], [5, 7]]
  };
  pole[4][8] = {
    player: 0,
    lines: [[2, 8], [6, 8], [4, 7]]
  };

  //5 string
  pole[5][1] = {
    player: 0,
    lines: [[6, 0], [4, 1], [4, 2]]
  };
  pole[5][2] = {
    player: 1,
    lines: [[6, 2], [5, 3], [4, 2]]
  };
  pole[5][3] = {
    player: 1,
    lines: [[4, 2], [4, 3], [4, 4], [5, 2], [5, 4], [6, 2], [6, 3], [6, 4]]
  };
  pole[5][4] = {
    player: 1,
    lines: [[5, 5], [5, 3], [4, 4], [6, 4]]
  };
  pole[5][5] = {
    player: 1,
    lines: [[4, 4], [4, 5], [4, 6], [5, 4], [5, 6], [6, 4], [6, 5], [6, 6]]
  };
  pole[5][6] = {
    player: 1,
    lines: [[4, 6], [6, 6], [5, 5]]
  };
  pole[5][7] = {
    player: 0,
    lines: [[4, 6], [4, 7], [6, 8]]
  };

  //6 string
  pole[6][0] = {
    player: 0,
    lines: [[4, 0], [5, 1]]
  };
  pole[6][2] = {
    player: 1,
    lines: [[5, 3], [5, 2], [6, 3]]
  };
  pole[6][3] = {
    player: 1,
    lines: [[5, 3], [6, 4], [6, 2]]
  };
  pole[6][4] = {
    player: 1,
    lines: [[5, 3], [5, 4], [5, 5], [6, 3], [6, 5], [7, 3], [7, 4], [7, 5]]
  };
  pole[6][5] = {
    player: 1,
    lines: [[6, 6], [6, 4], [5, 5]]
  };
  pole[6][6] = {
    player: 1,
    lines: [[6, 5], [5, 6], [5, 5]]
  };
  pole[6][8] = {
    player: 0,
    lines: [[4, 8], [5, 7]]
  };

  //7 string
  pole[7][3] = {
    player: 1,
    lines: [[6, 4], [8, 2], [7, 4]]
  };
  pole[7][4] = {
    player: 1,
    lines: [[6, 4], [8, 4], [7, 3], [7, 5]]
  };
  pole[7][5] = {
    player: 1,
    lines: [[6, 4], [8, 6], [7, 4]]
  };

  //8 string
  pole[8][2] = {
    player: 1,
    lines: [[8, 4], [7, 3]]
  };
  pole[8][4] = {
    player: 1,
    lines: [[8, 2], [7, 4], [8, 6]]
  };
  pole[8][6] = {
    player: 1,
    lines: [[8, 4], [7, 5]]
  };
  return pole;
}

pole = removeDots(pole);
pole = setDots(pole);

window.setup = function() {
  //Инициализация отрисовки Canvas
  createCanvas(530, 530);
  background(248, 241, 223);
  noLoop();
};

var a = [10, 10], //Храним позиции до и после хода
  b;

window.onload = function() {
  //Чтобы линии сразу рисовались
  loop();
  noLoop();
};

window.draw = function() {
  //Рисуем игру

  for (let i = 0; i < 9; i++) {
    //Рисуем линии
    for (let j = 0; j < 9; j++) {
      if (pole[j][i].lines === undefined) continue;

      let x1 = pole[j][i].x;
      let y1 = pole[j][i].y;
      let x2, y2;

      for (let z = 0; z < pole[j][i].lines.length; z++) {
        let W = pole[j][i].lines[z][0];
        let H = pole[j][i].lines[z][1];
        x2 = pole[W][H].x;
        y2 = pole[W][H].y;
        fill(246, 25, 36);
        line(x1, y1, x2, y2);
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    //Рисуем игроков и синие точки
    for (let j = 0; j < 9; j++) {
      if (pole[j][i].player === 2) {
        fill(246, 25, 36);
        circle(i * 60 + 20, j * 60 + 20, 8);
        //stroke(156, 39, 176);
        pole[j][i].x = i * 60 + 20;
        pole[j][i].y = j * 60 + 20;
      }
      if (pole[j][i].player === 1) {
        fill(2, 143, 3);
        circle(i * 60 + 20, j * 60 + 20, 8);
        //stroke(156, 39, 176);
        pole[j][i].x = i * 60 + 20;
        pole[j][i].y = j * 60 + 20;
      }
      if (pole[j][i].player === 0) {
        fill(0, 0, 240);
        circle(i * 60 + 20, j * 60 + 20, 4);
        //stroke(156, 39, 176);
        pole[j][i].x = i * 60 + 20;
        pole[j][i].y = j * 60 + 20;
      }
    }
  }

  window.mouseReleased = function() {
    // при клике реализуем ход игрока
    loop();
    let X = mouseX;
    let Y = mouseY;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (
          pole[j][i].x &&
          Math.abs(pole[j][i].x - X) < 20 &&
          Math.abs(pole[j][i].y - Y) < 20
        ) {
          b = [j, i];
          if (!isEqual(a, b)) {
            // Если позиции а и б не равны, делаем ход
            newStep(a, b); // Функция хода
            console.log(state);

            a = [j, i];
            b = [10, 10];
          }
        }
      }
      background(248, 241, 223);
      noLoop();
    }
  };
};

window.isEqual = function(a1, a2) {
  //Функция сравнения двух массивов
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
};

window.newStep = function(a, b) {
  // Ход игрока

  if (a[0] > 9 || a[0] < 0) return false;
  if (a[1] > 9 || a[1] < 0) return false;
  if (b[0] > 9 || b[0] < 0) return false;
  if (b[1] > 9 || a[1] < 0) return false;

  if (pole[b[0]][b[1]].player >= 1) return false; //Если на новом месте есть игрок, то ошибка
  if (pole[a[0]][a[1]].player === 2 || pole[a[0]][a[1]].player === 0)
    return false; //Если на старом месте пусто или чужой игрок, то ошибка

  if (canEat(a, b)) {
    pole[a[0]][a[1]].player = 0;
    pole[b[0]][b[1]].player = 1;
    let с = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

    pole[с[0]][с[1]].player = 0;
    botStep(); // Вызываем ход компьютера
    return false;
  }

  let ok = false;
  for (let i = 0; i < pole[a[0]][a[1]].lines.length; i++) {
    // Проверка на ходьбу по линиям
    if (
      pole[a[0]][a[1]].lines[i][0] == b[0] &&
      pole[a[0]][a[1]].lines[i][1] == b[1]
    )
      ok = true;
  }

  if (ok == false) return false;

  pole[a[0]][a[1]].player = 0;
  pole[b[0]][b[1]].player = 1;

  botStep(); // Вызываем ход компьютера
};

window.botStep = function() {
  // Расчет хода компьютера

  let steps = [];

  for (let i = 0; i < 9; i++) {
    //Ищем все возможные ходы и добавляем их в массив
    for (let j = 0; j < 9; j++) {
      if (pole[j][i].player !== 2) continue;

      for (let z = 0; z < pole[j][i].lines.length; z++) {
        let a = pole[j][i].lines[z][0];
        let b = pole[j][i].lines[z][1];

        if (pole[a][b].player === 0) {
          steps.push({
            a: [j, i],
            b: [a, b],
            canEat: false
          });
        }

        if (pole[a][b].player === 1) {
          let d = a + (j - a);
          let e = b + (j - b);

          if (Math.abs(j - i) >= 2 || Math.abs(j - e) >= 2) continue;

          console.log(d, e);

          if (canEatBot([j, i], [d, e], [a, b])) {
            steps.push({
              a: [j, i],
              b: [d, e],
              canEat: true
            });
          }
        }
      }
    }
  }

  let stepsEat = steps.filter(function(step) {
    return step.canEat === true;
  });

  console.log(steps);
  console.log(stepsEat);

  if (stepsEat.length == 0) {
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
};

window.doBotStep = function(a, b) {
  // Делает ход компьютера
  console.log(a, b);

  if (pole[b[0]][b[1]].player !== 0 || pole[b[0]][b[1]].player === undefined)
    return false;

  pole[a[0]][a[1]].player = 0;
  pole[b[0]][b[1]].player = 2;

  let c = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; // Вычисление шашки, которую съедят

  console.log(c);

  if (
    Number.isInteger(c[0]) &&
    Number.isInteger(c[1]) &&
    c[0] !== 0 &&
    c[1] !== 0
  ) {
    pole[c[0]][c[1]].player = 0;
  }
};

window.canEat = function(a, b) {
  // Проверка, можно ли съесть
  let c = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

  if (!Number.isInteger(c[0]) || !Number.isInteger(c[1])) return false; //Если у c - нецелые числа
  console.log(1);

  if (pole[b[0]][b[1]].player !== 0) return false; //Если на В уже игрок
  console.log(2);

  if (pole[a[0]][a[1]].player === 0) return false; //Если на А нет игрока
  console.log(3);

  if (pole[c[0]][c[1]].player === 1) return false; //Чтобы не есть своих
  console.log(4);

  if (a[1] === 0) return false; // На крайних линиях, там где места через одно
  if (a[1] === 8) return false;
  if (a[0] === 0) return false;
  if (a[0] === 8) return false;

  return true;
};

window.canEatBot = function(a, b, c) {
  // Проверка, можно ли съесть

  if (!Number.isInteger(c[0]) || !Number.isInteger(c[1])) return false; //Если у c - нецелые числа
  console.log(1);

  if (pole[b[0]][b[1]].player === 1) return false; //Если на В уже игрок
  console.log(2);

  if (pole[a[0]][a[1]].player !== 2) return false; //Если на А нет игрока
  console.log(3);

  if (pole[b[0]][b[1]].player === 2) return false; //Если на В уже игрок
  console.log(4);

  return true;
};

let Button1 = document.getElementById("btn1");

undoButton.addEventListener("click", () => {});
