/*
 Проверка, может ли игрок (любой), сходить из A на B и съесть шашку
 TRUE - можно
 FALSE - нельзя
*/

import pole from "./pole";

export default function(a, b) {
  const enableLog = false; // ВКЛ/ВЫКЛ Вывод ошибок в консоль

  let c = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; // Координата шашки, которую съедят (она посередине)
  let player = pole[a[0]][a[1]].player; // Номер игрока (1 или 2), который будет есть

  if (!Number.isInteger(c[0]) || !Number.isInteger(c[1])) {
    if (enableLog) console.error(a,b,c, "Дробные координаты!");
    return false;
  }

  if (pole[b[0]][b[1]].player !== 0) {
    if (enableLog) console.error(a, b, c, "На B уже есть игрок!");
    return false;
  }

  if (pole[a[0]][a[1]].player === 0) {
    if (enableLog) console.error(a, b, c, "На A нет игрока!");
    return false;
  }

  if (pole[c[0]][c[1]].player === player) {
    if (enableLog) console.error(a, b, c, "Попытка съесть своего!");
    return false;
  }

  /*

  if (a[1] == 0) return false; // На крайних линиях, там где места через одно
  if (a[1] === 8) return false;
  if (a[0] === 0) return false;
  if (a[0] === 8) return false;

  */

  return true; // Если ошибок нет, возвращаем TRUE
}
