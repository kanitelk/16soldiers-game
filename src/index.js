import "./css/style.scss";
import p5 from "p5";
//new p5();

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
    lines: [[3, 5], [3, 5], [3, 6]]
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
    lines: [[3, 5], [2, 6], [4, 6], [4, 4]]
  };
  pole[3][7] = {
    player: 0,
    lines: [[2, 8], [2, 6], [4, 6], [4, 7]]
  };

  //4 string
  pole[4][0] = {
    player: 0,
    lines: [[2, 0], [6, 0], [4, 1]]
  };
  pole[4][1] = {
    player: 0,
    lines: [[3, 1], [5, 1]]
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
    lines: [[4, 6], [6, 6], [4, 4], [5, 5]]
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
  createCanvas(530, 530);
  background(248, 241, 223);
};

var newX = 0, newY = 0, clickCounter = 0;

window.draw = function() {
  for (let i = 0; i < 9; i++) {
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

  //fill(204, 153, 0);
  //line(100, 100, 300, 300);

  window.mouseReleased = function() {
    clickCounter++;
    console.log(mouseX, mouseY);

    if (clickCounter % 2 == 0) {
      clickCounter = 0;
      let X = mouseX;
      let Y = mouseY;

      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          let a = [], b = [];
          if (
            pole[j][i].x &&
            Math.abs(pole[j][i].x - newX) < 20 &&
            Math.abs(pole[j][i].y - newY) < 20
          ) {
            console.log([j, i]);
          }

          if (
            pole[j][i].x &&
            Math.abs(pole[j][i].x - X) < 20 &&
            Math.abs(pole[j][i].y - Y) < 20
          ) {
            pole[j][i].player = 1;
            console.log([j, i]);
          }
      }
    }

      clear();
      redraw();
      background(248, 241, 223);
    };

    if (clickCounter % 2 == 0) {
      window.newX = mouseX;
      window.newY = mouseY;
    }

  }
}

console.log(pole);
