const unitSelection = document.querySelector('#unit')
const distanceInput = document.querySelector('#distance')
const sizeInput = document.querySelector('#tank')
const efficiencyTotal = document.querySelector('#efficiency')

//-------------------------------------------------------------

function calculateEfficiency() {
    const unitValue = unitSelection.options[unitSelection.selectedIndex].value;
    const distanceValue = parseFloat(distanceInput.value)
    const sizeValue = parseFloat(sizeInput.value)
    const totalValue = parseInt(distanceValue / sizeValue)
    if (unitValue == "mpg") {
        efficiencyTotal.innerHTML = `${totalValue} mpg`
    } else {
        efficiencyTotal.innerHTML = `${totalValue} km/L`
    }



}
//-------------------------------------------------------------
distanceInput.addEventListener('input', calculateEfficiency)
sizeInput.addEventListener('input', calculateEfficiency)
unitSelection.addEventListener('input', calculateEfficiency)
