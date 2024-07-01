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

	