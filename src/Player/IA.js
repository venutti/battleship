import Position from "../Position/Position.js";

class IA {
  constructor(aName, aGameBoard) {
    this.name = aName;
    this.gameboard = aGameBoard;
    this.allPos = [];
    for (let i = 0; i < this.gameboard.getLength(); i++) {
      for (let j = 0; j < this.gameboard.getLength(); j++) {
        this.allPos.push(new Position(i, j));
      }
    }
  }

  getRandomPosition() {
    let randomPos = this.allPos[Math.floor(Math.random() * this.allPos.length)];
    return randomPos;
  }
  attack(otherPlayer) {
    let randomPos = this.getRandomPosition();
    otherPlayer.receiveAttack(randomPos);
    this.allPos.splice(this.allPos.indexOf(randomPos), 1);
  }
  receiveAttack(aPosition) {
    this.gameboard.hit(aPosition);
  }
  allSunk() {
    return this.gameboard.allSunk();
  }
}

export default IA;
