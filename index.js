const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const length = document.getElementById('length-sol')
const volume = document.getElementById('volume-sol')
const mass = document.getElementById('mass-sol')
let meters
let feet
let liters
let gallons
let kilos
let pounds


convertBtn.addEventListener('click', function(){
    meters = Number(inputEl.value) * 0.3048
    feet = Number(inputEl.value) * 3.28084
    liters = Number(inputEl.value) * 3.78541
    gallons = Number(inputEl.value) * 0.264172
    kilos = Number(inputEl.value) * 0.453592
    pounds = Number(inputEl.value) * 2.20462
    if (Number(inputEl.value)){
        length.innerHTML = `${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meters.toFixed(3)} meters`
        volume.innerHTML = `${inputEl.value} liters = ${gallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${liters.toFixed(3)} liters`
        mass.innerHTML = `${inputEl.value} kilos = ${pounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilos.toFixed(3)} kilos`
    }
    else{
        alert("Wrong Input (Numbers only)")
    }
})