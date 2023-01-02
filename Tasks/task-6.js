export default class Plane {
  constructor(model, fuelSupply, fuelConsumption) {
    this.model = model;
    this.fuelSupply = fuelSupply;
    this.fuelConsumption = fuelConsumption;
  }

  calcFlightRange() {
    return (this.fuelSupply / this.fuelConsumption) * 100;
  }

  static sortFlightRange(planesArray) {
    planesArray.sort(function (a, b) {
      return a.calcFlightRange() - b.calcFlightRange();
    });

    planesArray.forEach((el) =>
      console.log(`${el.model}: ${el.calcFlightRange()}`)
    );
  }
}

export class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }
  calcFlightRange() {
    // override the calcFlightRange() method to take into account that the fuelSupply has increased the amount of fuel added by the addTank
    return ((this.fuelSupply + this.addTank) / this.fuelConsumption) * 100;
  }
}

export class PassengerPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
    super(model, fuelSupply, fuelConsumption);
    this.passengers = passengers;
    this.refueling = refueling;
  }
  calcFlightRange() {
    // override the calcFlightRange() method to take into account that the fuelSupply has increased refueling
    return ((this.fuelSupply + this.refueling) / this.fuelConsumption) * 100;
  }
}

export class WarPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
    super(model, fuelSupply, fuelConsumption);
    this.missiles = missiles;
    this.aerodynamicsKoef = aerodynamicsKoef;
  }
  calcFlightRange() {
    // override the calcFlightRange() method in such a way as to take into account that the flight range of the plane increases in proportion to the value of the aerodynamics coefficient of aerodynamicsKoef
    return (
      (this.fuelSupply / this.fuelConsumption) * 100 * this.aerodynamicsKoef
    );
  }
}
