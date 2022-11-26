class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }
  performAttack(aPosition) {
    let otherPlayer;
    if (this.currentPlayer === this.player1) {
      otherPlayer = this.player2;
    } else {
      otherPlayer = this.player1;
    }
    this.currentPlayer.attack(otherPlayer, aPosition);
    this.currentPlayer = otherPlayer;
  }
}
