import Celd from "./Celd.js";
import Ship from "../Ship/Ship.js";

it("a celd is created empty", () => {
  let aCeld = new Celd();
  expect(aCeld.isEmpty()).toBe(true);
});

it("a celd with a ship is not empty", () => {
  let aCeld = new Celd();
  let aShip = new Ship(1);
  aCeld.setShip(aShip);
  expect(aCeld.isEmpty()).toBe(false);
});

it("a new celd is not discovered", () => {
  let aCeld = new Celd();
  expect(aCeld.isDiscovered()).toBe(false);
});

it("a celd hitted is discovered", () => {
  let aCeld = new Celd();
  aCeld.hit();
  expect(aCeld.isDiscovered()).toBe(true);
});

it("a celd hitted twice throws error", () => {
  let aCeld = new Celd();
  aCeld.hit();
  expect(() => aCeld.hit()).toThrow(Error);
});

it("a celd with a ship is hitted and hit the ship", () => {
  let aCeld = new Celd();
  let aShip = new Ship(1);
  aCeld.setShip(aShip);
  aCeld.hit();
  expect(aShip.isSunk()).toBe(true);
});
