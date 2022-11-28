import GameBoard from "./GameBoard.js";
import Position from "../Position/Position.js";
import Ship from "../Ship/Ship.js";

it("the gameboard is created with a length correctly", () => {
  let gb = new GameBoard(5);
  expect(gb.getLength()).toBe(5);
});

it("a gameboard is created empty", () => {
  let gb = new GameBoard(5);
  expect(gb.isEmpty(new Position(0, 0))).toBe(true);
});

it("a gameboard can place a ship horizontally", () => {
  let gb = new GameBoard(5);
  let ship = new Ship(3);
  let pos = new Position(0, 0);
  let vector = new Position(1, 0);
  gb.placeShip(ship, pos, vector);
  expect(gb.isEmpty(pos)).toBe(false);
});

it("a ship placed in a position full all adjacents celds", () => {
  let gb = new GameBoard(5);
  let ship = new Ship(3);
  let pos = new Position(0, 0);
  let pos2 = new Position(1, 0);
  let pos3 = new Position(2, 0);
  let vector = new Position(1, 0);
  gb.placeShip(ship, pos, vector);
  expect(gb.isEmpty(pos)).toBe(false);
  expect(gb.isEmpty(pos2)).toBe(false);
  expect(gb.isEmpty(pos3)).toBe(false);
});

it("a ship placed in a position ONLY full all adjacents celds", () => {
  let gb = new GameBoard(5);
  let ship = new Ship(3);
  let pos = new Position(0, 0);
  let noPos = new Position(3, 0);
  let vector = new Position(1, 0);
  gb.placeShip(ship, pos, vector);
  expect(gb.isEmpty(noPos)).toBe(true);
});

it("a ship that breaks the limit of the gameboard throws error", () => {
  let gb = new GameBoard(5);
  let ship = new Ship(3);
  let pos = new Position(4, 0);
  let vector = new Position(1, 0);
  expect(() => gb.placeShip(ship, pos, vector)).toThrow(Error);
});

it("a gameboard has record of all the ships", () => {
  let gb = new GameBoard(5);
  let ship = new Ship(1);
  let pos = new Position(0, 0);
  gb.placeShip(ship, pos, new Position(1, 0));
  expect(gb.allSunked()).toBe(false);
});

it("a gameboard knows when all the ships were sunk", () => {
  let gb = new GameBoard(5);
  let ship = new Ship(1);
  let pos = new Position(0, 0);
  gb.placeShip(ship, pos, new Position(1, 0));
  gb.hit(pos);
  expect(gb.allSunked()).toBe(true);
});

it("place a ship above other ship throws error", () => {
  let gb = new GameBoard(5);
  let ship = new Ship(1);
  let pos = new Position(0, 0);
  gb.placeShip(ship, pos, new Position(1, 0));
  expect(() => gb.placeShip(ship, pos, new Position(1, 0))).toThrow(Error);
});
