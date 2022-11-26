import Position from "./Position.js";

it("a Position can be created correctly", () => {
  let pos = new Position(1, 2);
  expect(pos.getCoordX()).toBe(1);
  expect(pos.getCoordY()).toBe(2);
});

it("a Position can be compared to another (equal)", () => {
  let pos = new Position(1, 2);
  let anotherPos = new Position(1, 2);
  expect(pos.equals(anotherPos)).toBe(true);
});

it("a Position can be compared to another (no equal)", () => {
  let pos = new Position(1, 2);
  let anotherPos = new Position(2, 2);
  expect(pos.equals(anotherPos)).toBe(false);
});

it("Positions can be sum (happy case)", () => {
  let pos1 = new Position(1, 2);
  let pos2 = new Position(0, 4);
  let sum = pos1.sum(pos2);
  let expected = new Position(1, 6);
  expect(sum.equals(expected)).toBe(true);
});

it("sum positions give a different position", () => {
  let pos1 = new Position(1, 2);
  let pos1Copy = new Position(1, 2);
  let pos2 = new Position(0, 4);
  let pos2Copy = new Position(0, 4);
  let sum = pos1.sum(pos2);
  expect(pos1.equals(pos1Copy)).toBe(true);
  expect(pos2.equals(pos2Copy)).toBe(true);
});

it("Positions can be sum (sad case?)", () => {
  let pos1 = new Position(1, 2);
  let pos2 = new Position(0, 1);
  let sum = pos1.sum(pos2);
  let expected = new Position(1, 6);
  expect(sum.equals(expected)).toBe(false);
});

it("a Position is in a given limits (case 1)", () => {
  let pos = new Position(0, 1);
  let map =
    // map.length === coordY && map.0.length === coordX
    [
      [false, false],
      [true, false],
      [false, false],
    ];
  expect(pos.isInLimits(map[0].length, map.length)).toBe(true);
});

it("a Position is in a given limits (case 2)", () => {
  let pos = new Position(1, 1);
  let map =
    // map.length === coordY && map.0.length === coordX
    [
      [false, false],
      [false, true],
      [false, false],
    ];
  expect(pos.isInLimits(map[0].length, map.length)).toBe(true);
});

it("a Position is in a given limits (case 3)", () => {
  let pos = new Position(1, 2);
  let map =
    // map.length === coordY && map.0.length === coordX
    [
      [false, false],
      [false, false],
      [false, true],
    ];
  expect(pos.isInLimits(map[0].length, map.length)).toBe(true);
});

it("a Position is in a given limits (sad case 1)", () => {
  let pos = new Position(2, 2);
  let map =
    // map.length === coordY && map.0.length === coordX
    [
      [false, false],
      [false, false],
      [false, false],
    ];
  expect(pos.isInLimits(map[0].length, map.length)).toBe(false);
});

it("a Position is in a given limits (sad case 2)", () => {
  let pos = new Position(0, 3);
  let map =
    // map.length === coordY && map.0.length === coordX
    [
      [false, false],
      [false, false],
      [false, false],
    ];
  expect(pos.isInLimits(map[0].length, map.length)).toBe(false);
});
