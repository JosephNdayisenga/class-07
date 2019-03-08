'use strict'
let school = []
let School = function (name, min, max, spellsPerStudent) {
    this.name = name,
    this.min = min,
    this.max = max,
    this.spellsPerStudent = spellsPerStudent
}

School.prototype.spellsPerStudent = function() {
    let randomNumber = Math.ceil(Math.random() * (this.max - this.min) + this.min)
    return randomNumber * this.spellsPerStudent
}

let magicienDoz = new School ('magicienDoz', 6, 20, 30)
let abaroziTeam = new School ('abaroziTeam', 5, 15, 25)

school.push(magicienDoz, abaroziTeam)
console.log(school)