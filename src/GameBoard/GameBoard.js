import Celd from "./Celd.js";

const ERROR_MSJ_INVALID_POS = "That's an invalid position";
const ERROR_INVALID_PLACEMENT = "You can't place a ship there";

class GameBoard {
  constructor(aLength) {
    this.ships = [];
    this.length = aLength;
    this.board = [];
    for (let i = 0; i < aLength; i++) {
      let row = [];
      for (let j = 0; j < aLength; j++) {
        row.push(new Celd());
      }
      this.board.push(row);
    }
  }

  getLength() {
    return this.length;
  }
  getCeldAt(aPosition) {
    if (!aPosition.isInLimits(this.getLength(), this.getLength())) {
      throw new Error(ERROR_MSJ_INVALID_POS);
    }
    return this.board[aPosition.getCoordX()][aPosition.getCoordY()];
  }
  isEmpty(aPosition) {
    return this.getCeldAt(aPosition).isEmpty();
  }
  placeShip(aShip, aPosition, aVectorPosition) {
    let positions = [aPosition];
    for (let i = 0; i < aShip.getLength() - 1; i++) {
      positions.push(positions[positions.length - 1].sum(aVectorPosition));
    }

    let celds = positions.map((pos) => this.getCeldAt(pos));
    if (celds.every((celd) => celd.isEmpty())) {
      celds.forEach((celd) => celd.setShip(aShip));
    } else {
      throw new Error(ERROR_INVALID_PLACEMENT);
    }
    this.ships.push(aShip);
  }
  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
  hit(aPosition) {
    this.getCeldAt(aPosition).hit();
  }
}

export default GameBoard;
