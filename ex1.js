// exercise1

let name = prompt ("Enter Your Name");
let age = prompt ("Enter Your Age");
var Nom = name 
var Age = age 

if (age > 18 && name == Nom) {
    console.log ("Welcome to your account")
}
else {
    console.log ("Access Denied")
}

// exercise 2

let amount = prompt ("Enter anount given :")
var participants = 10

total = amount * participants
console.log (total)

// exercise 3

let age = prompt ("Enter Your Age")

if (age > 18) {
    console.log ("Eligible for discount")
}
else {
    console.log ("Not eligible for discount")
}

// exercise 4


let score1 = prompt ("Enter Your score/20")
let score2 = prompt ("Enter Your score/20")
let score3 = prompt ("Enter Your score/20")

var coef = 6
var nos = 3

sum1 = score1 * 2 
console.log (sum1)

sum2 = score2 * 2 
console.log (sum2)

sum3 = score3 * 2 
console.log (sum3)

total = sum1 + sum2 + sum3
console.log (total)

average = total / 6
console.log (average)

// exercise 5

let nom = "Kalash"
let age = 30
let inscriptionPayee = true


console.log("Type de la variable 'nom': " + typeof nom)
console.log("Type de la variable 'age': " + typeof age)
console.log("Type de la variable 'inscriptionPayee': " + typeof inscriptionPayee)

// exercise 6

let x = prompt("Enter your name")
var table = ["Paul", "Peter", "Jude", "Brayan", x]
var table2 = table.push("Emilie")
console.log(table)

// exercise 7


var iphone = {
    name: "Iphone 16e",
    color: "Space black",
    price: "$900 or $54.95/mo. for 24 mo.*",
    processor: "A18 chip, 6-core GPU, 16-core Neural Engine",
    battery: "Up to 26 hours video playback",
    protection: "Water resistant to a depth of 6 meters for up to 30 minutes",
    charging: "Supports USB-C, Qi wireless charging up to 7.5W",
    capacity: "512GB",
    IsGood: true,

    info: () => {
        console.log (`Le ${iphone.name} ${iphone.color} de ${iphone.capacity} est à ${iphone.price}
             et est ${iphone.protection} avec une memoire de ${iphone.capacity}`)
    }
}

iphone.info()