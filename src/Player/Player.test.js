import GameBoard from "../GameBoard/GameBoard.js";
import Player from "./Player.js";

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
