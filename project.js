// Create a class for vehicles
class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  // Create a class for cars that extends Vehicle
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  // Create a class for planes that extends Vehicle
  class Plane extends Vehicle {
    constructor(name, manufacturer, id, planeType) {
      super(name, manufacturer, id);
      this.planeType = planeType;
    }
  }
  
  // Create a class for employees
  class Employee {
    constructor(name, id, dob) {
      this.name = name;
      this.id = id;
      this.dob = dob;
    }
  }
  
  // Create a class for drivers that extends Employee
  class Driver extends Employee {
    constructor(name, id, dob, licenseID) {
      super(name, id, dob);
      this.licenseID = licenseID;
    }
  }
  
  // Create a class for pilots that extends Employee
  class Pilot extends Employee {
    constructor(name, id, dob, licenseID) {
      super(name, id, dob);
      this.licenseID = licenseID;
    }
  }
  
  // Create a class for reservations
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  // Create an array to store reservations
  let reservations = [];
  
  // Create three car objects
  let car1 = new Car("Car1", "Manufacturer1", 1, "Gas");
  let car2 = new Car("Car2", "Manufacturer2", 2, "Electric");
  let car3 = new Car("Car3", "Manufacturer3", 3, "Gas");
  
  // Create two plane objects
  let plane1 = new Plane("Plane1", "Manufacturer4", 4, "Jet");
  let plane2 = new Plane("Plane2", "Manufacturer5", 5, "Propeller");
  
  // Function to check and make reservations
  function makeReservation(employeeId, vehicleId) {
    // Find the employee and vehicle by their IDs
    let employee = employees.find(emp => emp.id === employeeId);
    let vehicle = vehicles.find(veh => veh.id === vehicleId);
  
    // Check if the employee is a pilot and the vehicle is a car
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log("Mismatch: Pilot cannot drive a car.");
    } else if (employee instanceof Pilot && vehicle instanceof Plane) {
      // Create a reservation object and store it in the reservations array
      let reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
      console.log("Reservation made successfully:", reservation);
    } else {
      console.log("Mismatch: Employee and vehicle types do not match.");
    }
  }
  
  // Make some reservations
  makeReservation(1, 1); // Mismatch: Pilot cannot drive a car.
  makeReservation(1, 4); // Reservation made successfully: { reservationDate: ..., employeeId: 1, vehicleId: 4, reservationID: 1 }
  
  // Print the contents of the reservations array using map
  reservations.map(reservation => console.log(reservation));
  