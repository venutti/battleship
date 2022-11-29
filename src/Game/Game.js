// Game with IA
class Game {
  constructor(player, IA) {
    this.player = player;
    this.IA = IA;
    this.winner;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }
  performAttack(aPosition) {
    this.player.attack(this.IA, aPosition);
    this.IA.attack(this.player);
    this.checkGameOver();
  }
  checkGameOver() {
    if (this.player.allSunk()) {
      this.winner = this.IA;
    }
    if (this.IA.allSunk()) {
      this.winner = this.player;
    }
  }
  getWinner() {
    return this.winner;
  }
}

export default Game;
