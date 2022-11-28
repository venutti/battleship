import GameBoard from "../GameBoard/GameBoard.js";
import Position from "../Position/Position.js";
import Player from "./Player.js";
import IA from "./IA.js";

it("a player can have a name", () => {
  let name = "Steve";
  let gb = new GameBoard(5);
  let aPlayer = new Player(name, gb);
  expect(aPlayer.getName()).toBe(name);
});

it("a player can have a gameboard", () => {
  let name = "Steve";
  let gb = new GameBoard(5);
  let aPlayer = new Player(name, gb);
  expect(aPlayer.getGameBoard()).toBe(gb);
});

it("a player can attack another player", () => {
  let name = "Steve";
  let gb1 = new GameBoard(5);
  let player1 = new Player(name, gb1);
  let gb2 = new GameBoard(5);
  let player2 = new Player(name, gb2);
  player2.attack(player1, new Position(0, 0));
  expect(() => player2.attack(player1, new Position(0, 0))).toThrow(Error);
});

it("a player can attack the enemy gameboard correctly", () => {
  let name = "Steve";
  let gb1 = new GameBoard(5);
  let player1 = new Player(name, gb1);
  let gb2 = new GameBoard(5);
  let player2 = new Player(name, gb2);
  player2.attack(player1, new Position(0, 0));
  expect(() => gb1.hit(new Position(0, 0))).toThrow(Error);
});

it("the IA can attack a player", () => {
  let name = "Steve";
  let gb1 = new GameBoard(2);
  let player = new Player(name, gb1);
  let gb2 = new GameBoard(2);
  let ia = new IA(name, gb2);
  for (let i = 0; i < 4; i++) {
    ia.attack(player);
  }
  expect(() => {
    gb1.hit(new Position(0, 0));
  }).toThrow(Error);
  expect(() => {
    gb1.hit(new Position(0, 1));
  }).toThrow(Error);
  expect(() => {
    gb1.hit(new Position(1, 0));
  }).toThrow(Error);
  expect(() => {
    gb1.hit(new Position(1, 1));
  }).toThrow(Error);
});
