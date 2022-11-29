import GameBoard from "./GameBoard/GameBoard.js";
import Ship from "./Ship/Ship.js";
import Position from "./Position/Position.js";
import UI from "./UI/UI.js";
import EventHandler from "./EventHandler/EventHandler.js";
import Player from "./Player/Player.js";
import Game from "./Game/Game.js";
import IA from "./Player/IA.js";
import Modal from "./UI/Modal.js";

const sizesShips = [10];
const gbSize = 10;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buildRandomGameBoard() {
  let ships = sizesShips.map((size) => new Ship(size));
  let gb = new GameBoard(gbSize);
  let totalShips = 0;
  while (totalShips < ships.length) {
    let randomX = getRandomInt(gbSize);
    let randomY = getRandomInt(gbSize);
    let pos = new Position(randomX, randomY);
    let dir =
      getRandomInt(gbSize) < gbSize / 2
        ? new Position(1, 0)
        : new Position(0, 1);
    try {
      gb.placeShip(ships[totalShips], pos, dir);
      totalShips++;
    } catch {}
  }
  return gb;
}

function toggleClose(element) {
  element.classList.toggle("close");
}

const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
const modal = new Modal(modalElement, overlayElement);
modal.init();

const boardPlayerElement = document.querySelector("#board1");
const boardEnemyElement = document.querySelector("#board2");
const gbPlayer = buildRandomGameBoard();
const gbEnemy = buildRandomGameBoard();

const uiEnemy = new UI(gbEnemy);
const uiPlayer = new UI(gbPlayer);
uiEnemy.createGameBoard(boardEnemyElement);
uiPlayer.createGameBoard(boardPlayerElement);

const player = new Player("Anonimous", gbPlayer);
const computer = new IA("IA", gbEnemy);

const game = new Game(player, computer);
const events = new EventHandler(boardEnemyElement, game, modal);
events.addUI(uiEnemy);
events.addUI(uiPlayer);
events.init();
