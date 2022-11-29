import GameBoard from "../GameBoard/GameBoard.js";

class Player {
  constructor(aName, aGameBoard) {
    this.name = aName;
    this.gameboard = aGameBoard;
  }

  attack(otherPlayer, aPosition) {
    otherPlayer.receiveAttack(aPosition);
  }
  receiveAttack(aPosition) {
    this.gameboard.hit(aPosition);
  }
  getName() {
    return this.name;
  }
  getGameBoard() {
    return this.gameboard;
  }
  allSunk() {
    return this.gameboard.allSunk();
  }
}

export default Player;
