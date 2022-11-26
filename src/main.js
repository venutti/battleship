import GameBoard from "./GameBoard/GameBoard.js";
import Ship from "./Ship/Ship.js";
import Position from "./Position/Position.js";

const sizesShips = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
const gbSize = 10;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buildRandomGameBoard() {
  let ships = sizesShips.map((size) => new Ship(size));
  let gb = new GameBoard(gbSize);
  let totalShips = 0;
  while (totalShips < ships.length) {
    let randomX = getRandomInt(gbSize);
    let randomY = getRandomInt(gbSize);
    let pos = new Position(randomX, randomY);
    let dir =
      getRandomInt(gbSize) < gbSize / 2
        ? new Position(1, 0)
        : new Position(0, 1);
    try {
      gb.placeShip(ships[totalShips], pos, dir);
      totalShips++;
    } catch {}
  }
  return gb;
}

export default buildRandomGameBoard;
