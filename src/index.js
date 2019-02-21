import "./css/style.scss";

let pole = [];

for (let i = 0; i < 9; i++) {
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
    lines: [[1, 3], [0, 4], [1,5], [2,4]]
  };
  pole[1][5] = {
    player: 2,
    lines: [[1, 4], [2, 4]]
  };

  pole[0][6] = {
    player: 2,
    lines: [[1, 5], [0, 4]]
  };
  return pole;
}

pole = removeDots(pole);
pole = setDots(pole);

console.log(pole);
