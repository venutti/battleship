import Ship from "./Ship.js";

it("a ship is not sunk when created", () => {
  let aShip = new Ship(1);
  expect(aShip.isSunk()).toBe(false);
});
it("a ship with length 1 is sunk when hitted", () => {
  let aShip = new Ship(1);
  aShip.hit();
  expect(aShip.isSunk()).toBe(true);
});
it("a ship with length greater than 1 is not sunk when hitted", () => {
  let aShip = new Ship(2);
  aShip.hit();
  expect(aShip.isSunk()).toBe(false);
});
it("a ship cannot be created with a length less or equal 0", () => {
  expect(() => new Ship(0)).toThrow(Error);
});
it("a ship hitted more times than its length throws error", () => {
  let aShip = new Ship(1);
  aShip.hit();
  expect(() => aShip.hit()).toThrow(Error);
});
it("a ship can give its length", () => {
  let aShip = new Ship(4);
  expect(aShip.getLength()).toBe(4);
});
