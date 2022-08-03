/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

const feetToMeter = 0.3048
const gallonToLiter = 3.785
const poundToKilo = 0.453

convertBtn.addEventListener("click", function() {
    let userValue = inputEl.value
    lengthEl.innerHTML = `${userValue} meters = ${(meterToFeet * userValue).toFixed(2)} feet 
    | 
    ${userValue} feet = ${(feetToMeter * userValue).toFixed(2)} meters`
    
    volumeEl.innerHTML = `${userValue} liters = ${(literToGallon * userValue).toFixed(2)} gallons 
    | 
    ${userValue} gallons = ${(gallonToLiter * userValue).toFixed(2)} liters`
    
    massEl.innerHTML = `${userValue} kilos = ${(kiloToPound * userValue).toFixed(2)} pounds 
    | 
    ${userValue} pounds = ${(poundToKilo * userValue).toFixed(2)} kilos`
})
