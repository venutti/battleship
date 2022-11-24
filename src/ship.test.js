import Ship from "./ship.js";

describe("ship test", () => {
  it("a ship is not sunk when created", () => {
    let aShip = Ship(1);
    expect(aShip.isSunk()).toBe(false);
  });
  it("a ship with length 1 is sunk when hitted", () => {
    let aShip = Ship(1);
    aShip.hit();
    expect(aShip.isSunk()).toBe(true);
  });
  it("a ship with length greater than 1 is not sunk when hitted", () => {
    let aShip = Ship(2);
    aShip.hit();
    expect(aShip.isSunk()).toBe(false);
  });
  it("a ship cannot be created with a length less or equal 0", () => {
    expect(() => Ship(0)).toThrow(Error);
  });
  it("a ship hitted more times than its length stands sunk", () => {
    let aShip = Ship(1);
    aShip.hit();
    aShip.hit();
    expect(aShip.isSunk()).toBe(true);
  });
  it("a ship can give its length", () => {
    let aShip = Ship(4);
    expect(aShip.getLength()).toBe(4);
  });
});
