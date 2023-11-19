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

// Create three car objects
let car1 = new Car("Camry", "Toyota", 1, "Gas");
let car2 = new Car("Corolla", "Toyota", 2, "Electric");
let car3 = new Car("Prius", "Toyota", 3, "Hybrid");

// Create two plane objects 
let plane1 = new Plane("747", "Boeing", 4, "Jet");
let plane2 = new Plane("777", "Boeing", 5, "Jet");

// Create an array to store employees 
let employees = [];

// Example: Create a pilot
let pilot1 = new Pilot("Yassin", 1, new Date(), "PilotLicense1");
let pilot2 = new Pilot("Raghad", 2, new Date(), "PilotLicense2");
let pilot3 = new Pilot("Khaled", 3, new Date(), "PilotLicense3");
let driver1= new Driver("Ahmad", 4, new Date(), "DriverLicense1");
let driver2 = new Driver("Mohammed", 5, new Date(), "DriverLicense2");
let driver3 = new Driver("Fatima", 6, new Date(), "DriverLicense3");
let driver4 = new Driver("Lina", 7, new Date(), "DriverLicense4");

// Example: Add the pilot/driver to the employees array
employees.push(pilot1, pilot2,pilot3, driver1, driver2, driver3,driver4);



// Create an array to store vehicles
let vehicles = [car1, car2, car3, plane1, plane2];



// Create an array to store reservations
let reservations = [];

// Function to check and make reservations
function makeReservation(employeeId, vehicleId) {

  // Find the employee and vehicle by their IDs
  let employee = employees.find(emp => emp.id === employeeId);
  let vehicle = vehicles.find(veh => veh.id === vehicleId);

       // Check if the employee is a pilot and the vehicle is a car
        if (employee instanceof Pilot && vehicle instanceof Car) {

          console.log("Mismatch: Pilots cannot drive cars.");

        } else if (employee instanceof Pilot && vehicle instanceof Plane) {

          // Create a reservation object and store it in the reservations array
          let reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
          reservations.push(reservation);

          console.log("Reservation made successfully:", reservation);

        } else {
          console.log("Mismatch: Employee and vehicle types do not match.");
        }
}

// Example 1: Make a reservation where a driver reserves a car
makeReservation(4, 4);

// Example 2: Make a reservation where a pilot reserves a plane
makeReservation(3, 6);

// Example 3: Make a reservation where a pilot tries to reserve a car (should fail)
makeReservation(2, 4);

// Example 4: Make a reservation where a driver tries to reserve a plane (should fail)
makeReservation(5, 5);

// Print the contents of the reservations array using map
reservations.map(reservation => console.log(reservation));