const ERROR_MSJ_CELD_HITTED = "This celd is already hit";
const ERROR_MSJ_CELD_FULL = "This celd has already a ship";

class Celd {
  constructor() {
    this.ship = null;
    this.discovered = false;
  }

  isEmpty() {
    return this.ship === null;
  }
  setShip(aShip) {
    if (!this.isEmpty()) {
      throw new Error(ERROR_MSJ_CELD_FULL);
    }
    this.ship = aShip;
  }
  isDiscovered() {
    return !!this.discovered;
  }
  hit() {
    if (this.isDiscovered()) {
      throw new Error(ERROR_MSJ_CELD_HITTED);
    }
    this.discovered = true;
    if (this.ship) {
      this.ship.hit();
    }
  }
}

export default Celd;
