let countsOfLoan = 0;
const container = document.getElementById('transrecgp');
let cookie = document.cookie.split('=');
let nameOfLoggedInUser = 'Bret';

function createRowOfInfo(itemNamer, qtfy, payer, daterOfPurchases, nameOfLoggedInUser) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute('class', 'maintransrec');

  const itemName = document.createElement('p');
  itemName.textContent = itemNamer;

  const qty = document.createElement('p');
  qty.textContent = qtfy;

  const payAmount = document.createElement('p');
  payAmount.textContent = payer;

  const dateOfPurchase = document.createElement('p');
  dateOfPurchase.setAttribute('id','date')
  dateOfPurchase.textContent = daterOfPurchases;
const nameOfP = document.querySelector('.nameofprs');

nameOfP.textContent = nameOfLoggedInUser;
  const arraysOfVar = [dateOfPurchase,itemName, qty, payAmount];
  arraysOfVar.forEach((a) => {
    newDiv.appendChild(a);
  })

  container.appendChild(newDiv);
  fetch('/price.json')
  .then(response => response.json())
  .then(data => {
  const rateToCompare = data.Cocoa;
  const nameOfStatus = document.createElement('p')
  newDiv.appendChild(nameOfStatus);
  
  if(payer < rateToCompare*qtfy){
    nameOfStatus.textContent= 'loaned';
    countsOfLoan++;
    console.log(countsOfLoan);
  }
  else {
    nameOfStatus.textContent = 'fully paid';
  }
  })
}



fetch('/data.json')
  .then(response => {
    console.log('Response:', response);
    return response.json();
  })
  .then(data => {
    let userInfo = Object.entries(data[nameOfLoggedInUser]);
    console.log(userInfo);
    for (const date in userInfo) {
      
      const datesObject = userInfo[date];
      const daterOfPurchases = datesObject[0];
      console.log(datesObject[0]);
      const dataForDates = Object.values(datesObject)[1];
      console.log(dataForDates); // Get the object at index 1
      for (const key in dataForDates) {
        const itemNamer = key;
        console.log(itemNamer);
        const value = dataForDates[key];
        console.log(value);
        const qtfy = value.qty;
        const payer = value.payedInCedis;
        createRowOfInfo(itemNamer, qtfy, payer, daterOfPurchases, nameOfLoggedInUser);
    
      }
    }
  })
  .catch(error => {
    console.error('Error:', error); // Log the error
  });
