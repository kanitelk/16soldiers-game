import pole from './pole'
import canEat from './canEat.js'

export default function (a, b) {
  // Функция отвечает за выполнения хода в игре (компьютером и человеком, в данном случае - человеком)
  // А - начальная полиция шашки, B - конечная 

  if (a[0] > 9 || a[0] < 0) return false; // Проверка на выход за границы поля
  if (a[1] > 9 || a[1] < 0) return false;
  if (b[0] > 9 || b[0] < 0) return false;
  if (b[1] > 9 || a[1] < 0) return false;

  if (pole[b[0]][b[1]].player >= 1) return false; //Если на новом месте (B) есть игрок, то ошибка
  if (pole[a[0]][a[1]].player === 2 || pole[a[0]][a[1]].player === 0)
    return false; //Если на старом месте (A) пусто или чужой игрок, то ошибка

  if (canEat(a, b)) { // Если можем съесть шашку компьютера
    pole[a[0]][a[1]].player = 0;
    pole[b[0]][b[1]].player = 1;
    let с = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

    pole[с[0]][с[1]].player = 0;
    botStep(); // Вызываем ход компьютера
    return false;
  }

  let ok = false; // Нужно для проверки на ходьбу по линиям
  for (let i = 0; i < pole[a[0]][a[1]].lines.length; i++) {
    // Проверка на ходьбу по линиям
    if (
      pole[a[0]][a[1]].lines[i][0] == b[0] &&
      pole[a[0]][a[1]].lines[i][1] == b[1]
    )
      ok = true;
  }

  if (ok == false) return false; // Если ход не по линии, то ошибка

  pole[a[0]][a[1]].player = 0; // Перемещаем шашку игрока
  pole[b[0]][b[1]].player = 1;

  botStep(); // Вызываем ход компьютера
};