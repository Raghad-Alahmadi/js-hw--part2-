const d = new Date(2020, 9, 17)

//console.log(d.getDate());
//console.log(d.getDate());
//console.log(d.getDate());
console.log(d.getFullYear());

//

const number = Math.ceil(-9.12)
console.log(number)

//


const number2 = Math.floor(-9.12)
console.log(number2)

//


const number3 = Math.round(9.52)
console.log(number3)

//


const number4 = Math.abs(-8)
console.log(number4)

//


const numbers = [4, 2, -9, 9, 7]
const num = Math.min(...numbers)
console.log(num)

const num2 = Math.max(...numbers)
console.log(num2)

//
const str = '1.45'
const floatNum = parseFloat(str)
console.log(floatNum + 1);

//

const str2 = '9090'
const intNum = parseInt(str2)
console.log(intNum + 1);

//

const number5 = Math.trunc(4.16)
console.log(number5);

/*

const num3 = 3
const isInt = num3.isInteger(num3)
console.log(isInt);


*/


function sqr(num){
    if(isNaN(num))
        return 'Invalid'
    return num * num
}

console.log(sqr('a'))


//

const num4 = Math.pow(2,3)
console.log(num4)

//

const sqrNum = Math.sqrt(num2)
console.log(sqrNum)

//

console.log(Math.sign('a'))

//

const r = -3/0
console.log(r)

//

const rand = Math.random()
console.log(rand)

//

const num5 = 333_455_232
console.log(num5)

//


//let age = 14
//let age = 0xe
//let age = 0o16
let age = 0b1110


console.log(num.toString(2))

//

function sum ( x, y){
    return x + y
}
function mul ( x, y){
    return x * y
}

function sub ( x, y){
    return x - y
}
function op ( x, y, opr){
    return `result = [${opr(x , y)}]`
}
console.log(sub(1,2))
console.log(op(5,3,sum))
console.log(op(5,3,mul))
console.log(op(5,3,sub))
console.log(op(5,3, (x, y) => x + y))

const summ = (x, y) => x + y
console.log(op(5,3,summ))
//


function format(msg, fromatCallBack){
    return fromatCallBack(msg)
}

function htmlFormat(msg){
    return `<div>${msg}<div>`
}

function jsonFormat(msg){
    return `{"msg": "${msg}"}`
}

console.log(format('Welcome to JavaScript', jsonFormat))


///

const colors = ['red', 'green' , 'blue']
colors.forEach(function(curr, index, array){
    console.log(index,curr);
})

//

const ages = [11, 13, 15, 12, 22, 27]

const hasAdult = ages.some(function(element){
    return element >=18
})

console.log(hasAdult)

//

const areAdult = ages.every(function(element){
    return element >=18
})

console.log(areAdult)

// 

const isContainRed = colors.includes('red', 1)
console.log(isContainRed)

//

const index = colors.indexOf('green',-2)
console.log(index)

const index1 = colors.lastIndexOf('green',-2)
console.log(index1)


const index2 = ages.findIndex(function(element){
    return element >=25
})

console.log(index2)


///

const el = ages.find(function(e){
    return e % 4 ==0
})
console.log(el)

//

const even = ages.filter(function(e){
    return e % 2 ==0
})
console.log(even)

//


const colors1 = ['red', 'yellow' , 'blue']

const colors2= ['green', 'orange' , 'violet']

const col =  colors1.concat(colors2)
console.log(col)

const rgb = colors.slice(-4, -1)
console.log(rgb)

colors.splice(2,0,'gray','yellow')
console.log(colors)

const strColors = colors.join('-')
console.log(strColors)

console.log(colors.sort())


console.log(colors.reverse())

const sqrNumber = ages.map(function(e){
    return e * e
})
console.log(sqrNumber)

/*
const strColors1 = 'red ; green ; blue ; black'
const arrColors = strColors1.spilt()
console.log(arrColors);
*/



const total = ages.reduce(function(acc,curr, index, array){
    return acc + curr
}, 100)

console.log(total)


///


const car = {
    name: 'camry',
    color: 'white',
    currSpeed: 0,
    move: function(speed){
        this.currSpeed = speed
        return `The ${this.name} is moving at speed of ${this.currSpeed} km per hour`
    },
    stop: function () {
        this.currSpeed = 0
        return `The ${this.name} stopped`
    }
}

class carr{
    static numOfCars = 0
    constructor(name, color, cuurspeed){
        this.name = name
        this.color = color
        this.currspeed = cuurspeed
        carr.inc()
    }

    move(speed){
        this.currspeed = speed
        return `The ${this.name} is moving at speed of ${this.currSpeed} km per hour`
    }
    stop(){
        this.currSpeed = 0
        return `The ${this.name} stopped`
    }
    static inc(){
        carr.numOfCars++
    }
}
console.log(car.name)
console.log(car.move(100))

const car1 = new carr('camry', 'white',0)
const car2 = new carr('corella', 'black',0)

console.log(car1)
console.log(car2)

console.log(carr.numOfCars)

//

/*
class Animal {
    constructor9=(name, color){
        this.name = name
        this.color = color
        this.speed = 0
    }
    run(speed){
        this.speed = speed
        return `${this.name} runs with speed ${this.speed}`
    }
}

class cat extends Animal{
    makesound(){
        return 'meow..'
    }
}

class fox extends Animal{
    makesound(){
        return 'bark..'
    }
}

const catt = new cat('snowy','white')
console.log(catt)
catt.makesound()

*/


let user2 = {
    fName: "Asmaa",
    lName: "Mohamed"
}

let printFullName = function(age){
    console.log("Hello, " + this.fName+ " " + this.lName + " . your age is: " + age);
}

printFullName.call(user1, "25");
printFullName.call(user2, "20");

printFullName.apply(user1, [25]);
printFullName.apply(user2, [20]);

let newfun = printFullName.bind(user1)
newfun("25")


///

let add = (n1, n2, n3) => n1 + n2 + n3

let res = n1 => {let res = n1}

let print = () => console.log("this arrow function has no parameters")

//

(function(n){
    console.log(n);
})("Reem");

//

let obj = { 
    tit: " How to Write",

    function1: function(){
        return console.log("First Function")
    },
    function2: function(){
        return console.log("Second Function")
    },
    function3: function(){
        return console.log("third Function")
    }
}

obj.function1()
obj.function2()
obj.function3()

//

function rectArea(w, l ) {
    console.log(w, l)
    let a = w * l
    return a
}

let area = rectArea(4)
console.log(area)

function rectArea2(w, l =10 ) {
    console.log(w, l)
    let a = w * l
    return a
}

let area2 = rectArea2(4,5)
console.log(area2)

//

let studends = function(name1, name2, ...names, name3){
    console.log(name1, name2, names, name3)
}

studends("hind","Khalid", "abdullah", "Reem")

//

