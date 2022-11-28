// Game with IA
class Game {
  constructor(player, IA) {
    this.player = player;
    this.IA = IA;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }
  performAttack(aPosition) {
    this.player.attack(this.IA, aPosition);
    this.IA.attack(this.player);
  }
}

export default Game;
