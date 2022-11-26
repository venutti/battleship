class Ship {
  constructor(aLength) {
    if (aLength < 1) {
      throw new Error("The length must be an integer");
    }
    this.timesHit = 0;
    this.length = aLength;
  }

  isSunk() {
    return this.timesHit === this.length;
  }
  getLength() {
    return this.length;
  }
  hit() {
    if (this.isSunk()) {
      throw new Error("The ship is sunk");
    }
    this.timesHit++;
  }
}

export default Ship;
