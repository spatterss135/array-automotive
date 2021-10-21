import {Vehicle} from "./vehicleBaseClass.js"

class mercurySedan extends Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers
        this.passenger = passenger
        this.numberOfWheels = numberOfWheels
        this.maximumSpeed = maximumSpeed
        this.fuel = fuel
        this._scheduleService = scheduleService
    }

    loadPassenger(num) {
        if (this.passenger + num < this.maximumPassengers) {
            this.passenger += num
        }
    }

    start() {
        if (this.fuel > 0) this.start = true
    }

    scheduleService() {
        if (this.mileage > 30000) {
            this._scheduleService = true
            console.log('Fix it up')
        }
    }
}

let car = new mercurySedan('Ford', 'F-150', 1997, 'black', 322222, 10, 0, 4, 120, 30, false)

car.scheduleService()