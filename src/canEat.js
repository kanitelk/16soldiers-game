/*
 Проверка, может ли игрок (любой), сходить из A на B и съесть шашку
 TRUE - можно
 FALSE - нельзя
*/

import pole from "./pole";

export default function(a, b) {
  let c = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; // Координата шашки, которую съедят (она посередине)

  let player = pole[a[0]][a[1]].player; // Номер игрока (1 или 2), который будет есть

  if (!Number.isInteger(c[0]) || !Number.isInteger(c[1])) return false; //Если C - нецелые координаты
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
}
