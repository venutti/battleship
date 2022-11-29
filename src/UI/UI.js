import Position from "../Position/Position.js";

class UI {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.container;
  }

  createGameBoard(container) {
    this.container = container;
    for (let i = 0; i < this.gameboard.getLength(); i++) {
      let celdContainer = document.createElement("div");
      for (let j = 0; j < this.gameboard.getLength(); j++) {
        let celdElement = document.createElement("div");
        let celd = this.gameboard.getCeldAt(new Position(i, j));
        celdElement.dataset.X = i;
        celdElement.dataset.Y = j;
        this.showCeld(celdElement, celd);
        celdContainer.appendChild(celdElement);
      }
      container.appendChild(celdContainer);
    }
  }
  showCeld(celdContainer, celd) {
    if (!celd.isDiscovered()) {
      celdContainer.classList = "celd default";
    } else if (celd.isEmpty()) {
      celdContainer.classList = "celd empty";
    } else {
      celdContainer.classList = "celd hitted";
    }
    if (celd.isSunk()) {
      celdContainer.classList = "celd sunk";
    }
  }
  showGameboard() {
    Array.from(this.container.querySelectorAll(".celd")).forEach(
      (celdElement) => {
        let coordX = celdElement.dataset.X;
        let coordY = celdElement.dataset.Y;
        let pos = new Position(coordX, coordY);
        let celd = this.gameboard.getCeldAt(pos);
        this.showCeld(celdElement, celd);
      }
    );
  }
}

export default UI;
