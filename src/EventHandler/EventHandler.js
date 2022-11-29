import Position from "../Position/Position.js";

class EventHandler {
  constructor(boardElement, game, modal) {
    this.boardElement = boardElement;
    this.game = game;
    this.ui = [];
    this.modal = modal;
  }

  init() {
    this.boardElement.addEventListener("click", (e) => {
      let rect = this.boardElement.getBoundingClientRect();
      let x = e.clientX - rect.left; //x position within the element.
      let coordX = Math.floor(x / e.target.offsetWidth);
      let y = e.clientY - rect.top; //y position within the element.
      let coordY = Math.floor(y / e.target.offsetHeight);
      this.performAttack(coordX, coordY);
    });
  }
  performAttack(coordX, coordY) {
    let pos = new Position(coordX, coordY);
    this.game.performAttack(pos);
    this.show();
  }
  addUI(ui) {
    this.ui.push(ui);
  }
  show() {
    this.ui.forEach((ui) => ui.showGameboard());
    if (this.game.getWinner()) {
      this.showWinner();
    }
  }
  showWinner() {
    this.modal.addHTML(
      `<h2>El ganador es ${this.game.getWinner().getName()}</h2>`
    );
    this.modal.show();
  }
}

export default EventHandler;
