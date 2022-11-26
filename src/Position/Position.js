class Position {
  constructor(coordX, coordY) {
    this.coordX = coordX;
    this.coordY = coordY;
  }

  sum(aPosition) {
    return new Position(
      this.coordX + aPosition.coordX,
      this.coordY + aPosition.coordY
    );
  }
  isInLimits(xLimit, yLimit) {
    return this.coordX < xLimit && this.coordY < yLimit;
  }
  equals(aPosition) {
    return this.coordX === aPosition.coordX && this.coordY === aPosition.coordY;
  }
  getCoordX() {
    return this.coordX;
  }
  getCoordY() {
    return this.coordY;
  }
}

export default Position;
