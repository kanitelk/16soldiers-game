import "./css/style.scss";
import p5 from "p5"; // Библиотека отрисовка графики
import pole from "./pole";
import newStep from "./newStep";
import { newGame } from "./buttons";
import score from "./score";

window.setup = function() {
  //Инициализация отрисовки Canvas
  let canvas = createCanvas(530, 530); // Ширина, высота
  canvas.parent("game");
  background(248, 241, 223); // Цвет фона, RGB
  noLoop(); // Перерисовка только при изменении данных
};

window.onload = function() {
  // Чтобы линии нарисовались при загрузке страницы
  loop();
  noLoop();
};

var a = [-1, -1],
  b; //Храним позиции до и после хода. А - позиция ДО, B - позиция после

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
        circle(i * 60 + 20, j * 60 + 20, 3);
        //stroke(156, 39, 176);
        pole[j][i].x = i * 60 + 20;
        pole[j][i].y = j * 60 + 20;
      }
    }
  }

  window.mouseReleased = function() {
    // При клике мышью на поле
    loop();
    let X = mouseX; // Записываем координаты клика
    let Y = mouseY;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (
          pole[j][i].x &&
          Math.abs(pole[j][i].x - X) < 20 && //Выбираем шашку по координатам X и Y, сравнивая с координатами мыши
          Math.abs(pole[j][i].y - Y) < 20
        ) {
          b = [j, i];
          if (!isEqual(a, b)) {
            // Если позиции A и B не равны, делаем ход
            score();
            newStep(a, b); // Функция хода
            a = [j, i];
            b = [-1, -1];
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
  // TRUE - если a1 == a2, иначе  FALSE
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
};

window.canEatBot = function(a, b, c) {
  // Проверка, можно ли съесть

  if (!Number.isInteger(c[0]) || !Number.isInteger(c[1])) return false; //Если у c - нецелые числа

  if (pole[b[0]][b[1]].player === 1) return false; //Если на В уже игрок

  if (pole[a[0]][a[1]].player !== 2) return false; //Если на А нет игрока

  if (pole[b[0]][b[1]].player === 2) return false; //Если на В уже игрок

  return true;
};
