// SELECT FORM FIELDS

const userName = document.getElementById("userName");
const userKm = document.getElementById("userKm");
const userAge = document.getElementById("userAge");


// VARIABLES
const kmStandardPrice = 0.21;

const minorDiscount = 20/100;
const oldDiscount = 40/100;

 let finalPrice;

//SYSTEM
if (isNaN(ageUser) || isNaN(kmNum)) {
  console.error("Hai inserito valori non validi per età o km.");
} 
else{
  const basePrice = kmNum * kmStandardPrice;


if(ageUser <= 18){
    finalPrice = basePrice * (1 - minorDiscount); 
}
else if(ageUser >= 65){
    finalPrice = basePrice * (1 - oldDiscount);
}
else{
    finalPrice = basePrice;
}

}


const fixedFinalPrice = finalPrice.toFixed(2);

//OUTPUT

console.log(`ho ${ageUser} anni, e voglio fare ${kmNum} chilometri`);

console.log(`Il prezzo del tuo biglietto è ${fixedFinalPrice}€`);