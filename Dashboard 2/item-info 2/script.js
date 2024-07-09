       const container = document.getElementById('chart');

function createRowOfInfo(itemNamer, qtfy, payer, daterOfPurchases, container) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute('class', 'chart');

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
.then(response => response.json())
.then(data => {
  const searchResult={};
  function searchCocoa(obj, name, date){
    searchResult[name]=searchResult[name]|| {};
    searchResult[name][date]= obj.Cocoa;
    return searchResult;
  }
  for(const name in data){
    for(const date in data[name]){
      const breakDown = searchCocoa(data[name][date],name,date);
      const nameOfPrs = name;
       const daterOfPurchases = date;
       const qtfy = breakDown[name][date].qty;
       console.log(qtfy);
       const payer = breakDown[name][date].payedInCedis;
     //  const container = document.getElementById('chart');
       createRowOfInfo(nameOfPrs, qtfy, payer, daterOfPurchases, container);
    }
  }
    console.log(searchResult);
  
})