const Ship = function (length) {
  if (length < 1) {
    throw new Error("The length must be an integer");
  }
  let lengthShip = length;
  let timesHit = 0;

  const hit = function () {
    if (isSunk()) return;
    timesHit++;
  };
  const isSunk = function () {
    return timesHit === lengthShip;
  };
  const getLength = function () {
    return lengthShip;
  };

  return {
    hit,
    isSunk,
    getLength,
  };
};

export default Ship;
