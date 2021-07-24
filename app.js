'use strict'
let totalPrice = 0;
let gloArr = [];
function Mycar(carMod, modYear,manfact) {
    this.carModel = carMod;
    this.modelYear = modYear;
    this.price = this.randomPrice()
    this.manufacturer = manfact;
    gloArr.push(this)


}

Mycar.prototype.randomPrice = function() {
    
    return Math.floor(Math.random() * (100000 - 7000 + 1) ) + 7000;
}
console.log(Mycar.prototype.randomPrice());
  
let form = document.getElementById('form')
form.addEventListener('submit',handelClicking);

function handelClicking(event) {
    // event.preventDefault();

    let carMod = document.getElementById('carModel');
    let modYear = document.getElementById('modelYear');
    let manfact = document.getElementById('manfact');
    
    new Mycar(carMod.value,modYear.value,manfact.value);
    console.log(gloArr);
    form.reset();
    table.textContent = '';
    render();
    localStorage.setItem('newcar',JSON.stringify(gloArr))
    
}
console.log(gloArr);

let table = document.getElementById('table');

function renderHeadRaw() {
    let headRaw = document.createElement('tr');
    table.appendChild(headRaw);
    let carHead = document.createElement('th');
    headRaw.appendChild(carHead);
    carHead.textContent= 'Car Model'
    let modelHead = document.createElement('th');
    headRaw.appendChild(modelHead);
    modelHead.textContent= 'Model Year';
    let priceHead = document.createElement('th');
    headRaw.appendChild(priceHead);
    priceHead.textContent= 'Price';
    let manfactHead = document.createElement('th');
    headRaw.appendChild(manfactHead);
    manfactHead.textContent= 'Manufacturer';
    
}
renderHeadRaw()

function render() {   
    for (let i = 0; i < gloArr.length; i++) {       
        
        let newRaw = document.createElement('tr')
        table.appendChild(newRaw);
        let newCarModel = document.createElement('td');
        newRaw.appendChild(newCarModel);
        newCarModel.textContent = gloArr[i].carModel;
        let newModelYear = document.createElement('td');
        newRaw.appendChild(newModelYear);
        newModelYear.textContent = gloArr[i].modelYear;
        let newPrice = document.createElement('td');
        newRaw.appendChild(newPrice);
        newPrice.textContent = gloArr[i].price;
        let newManFact = document.createElement('td');
        newRaw.appendChild(newManFact);
        newManFact.textContent = gloArr[i].manufacturer;

        totalPrice+=gloArr[i].price
        
    }
    let totalParagraph = document.createElement('p')
    table.appendChild(totalParagraph)
    totalParagraph.textContent = 'total Price = '+totalPrice
}


function getFromLs() {
    
    let data = localStorage.getItem('newcar');
    let parseData = JSON.parse(data);
    if (parseData) {
        for (let i = 0; i < parseData.length; i++) {
            gloArr.push(parseData[i]);

            
        }
        
    }
    
    
}
getFromLs();
render()