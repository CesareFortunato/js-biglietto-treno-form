// SELECT FORM FIELDS

const userName = document.getElementById("userName");
const userKm = document.getElementById("userKm");
const userAge = document.getElementById("userAge");

//SELECT FORM

const myForm = document.getElementById("trainForm");

//SELECT VALUES

const cardName = document.getElementById("cardName");
const cardKm = document.getElementById("cardKm");
const cardPrice = document.getElementById("cardPrice");
const ticketCard = document.getElementById("ticketCard");
const allonsImg = document.getElementById("allons-img");



// OTHER VARIABLES
const kmStandardPrice = 0.21;
const minorDiscount = 20 / 100;
const oldDiscount = 40 / 100;

//SYSTEM

// form system

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // take values from the user input
  const nameValue = userName.value.trim();
  const kmValue = Number(userKm.value);
  const ageValue = userAge.value;

  // log values in console

  console.log(nameValue, kmValue, ageValue);

  // validation

  if (!nameValue || isNaN(kmValue) || kmValue <= 0) {
    alert("Il nome o i km inseriti non sono validi");

    return; //if this is true stop
  }

  // values to calc Price

  let basePrice = kmValue * kmStandardPrice;
  let finalPrice = basePrice;

  //discount

  if (ageValue === "minor") {
    finalPrice *= (1 - minorDiscount);
  } else if (ageValue === "old") {
    finalPrice *= (1 - oldDiscount);
  }


  const fixedFinalPrice = finalPrice.toFixed(2);

  //OUTPUT

  cardName.innerHTML = nameValue;
  cardKm.innerHTML = kmValue + " km";
  cardPrice.innerHTML = fixedFinalPrice + " €";

  //SHOW CARD

  ticketCard.classList.remove("d-none");
  allonsImg.classList.remove("d-none");

})