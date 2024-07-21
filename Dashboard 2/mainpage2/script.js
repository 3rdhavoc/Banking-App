let adminName = document.getElementById('NameofAdmin');
const storedUser = localStorage.getItem('currentUser');
 console.log('Local storage set:', localStorage.getItem('currentUser'));
console.log('storedUser:', storedUser); 
if (storedUser) {
  const user = JSON.parse(storedUser);
  adminName.innerHTML = user.name;
} else {
	console.log("How did you get here??");
}
const container = document.getElementById('contentofinv');

function createBox(item, container){
  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'contbox');
  const itemCreate = document.createElement('p')
  itemCreate.textContent = item;
  itemCreate.setAttribute('class','itemselect');
  
  
  itemCreate.addEventListener('click', function () {
  window.location = "/Dashboard 2/item-info 2/index.html";
})
	
  newDiv.appendChild(itemCreate);
  container.appendChild(newDiv);
}


fetch('/data.json')
.then(response => response.json() )
.then(data => {
  for(const name in data){
    for(const date in data[name]){
      const item = Object.keys(data[name][date]);
      
      
    createBox(item, container);
      
    }
  }
  } )
  
  
  
