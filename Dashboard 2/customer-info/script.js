
const container = document.getElementById('transrecgp');
let cookie = document.cookie.split('=');
let nameOfLoggedInUser = 'Bret';

function createRowOfInfo(itemNamer, qtfy, payer, daterOfPurchases) {
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

  const arraysOfVar = [dateOfPurchase,itemName, qty, payAmount, ];
  arraysOfVar.forEach((a) => {
    newDiv.appendChild(a);
  })

  container.appendChild(newDiv);
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
        const qtfy = value.qty;
        const payer = value.payedInCedis;
        createRowOfInfo(itemNamer, qtfy, payer, daterOfPurchases);
      }
    }
  })
  .catch(error => {
    console.error('Error:', error); // Log the error
  });
