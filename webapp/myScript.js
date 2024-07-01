const body = document.body;
	lastScroll = 0;
	window.addEventListener('scroll', () => {
		const currentScroll = window.pageYOffset;
		if (currentScroll <= 0){
			body.classList.remove("scroll-up");
		}
		if (currentScroll > lastScroll && !body.classList.contains("scroll-down")){
			body.classList.remove("scroll-up");
			body.classList.add("scroll-down");

		}
		if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
			body.classList.remove("scroll-down");
			body.classlist.add("scroll-up")
		}

		lastScroll = currentScroll;
	})

	// navigation animation above


document.getElementById('log in').addEventListener("click", function(){
	document.querySelector(".popupcont").style.display = "block";
	document.getElementById("forst").classList.add("lock-background");	
	document.querySelector(".popupt").style.display = "flex";

})

document.querySelector(".popupt").addEventListener("click", function(){
	document.querySelector(".popupt").style.display = "none";
	document.querySelector(".popupcont").style.display = "none";
})
//log in pop-up above
let userInput;
let pinInput;

function loginCallback(userInput) {
	console.log("storing is working");
  const user = { name: userInput, loggedIn: true };
  localStorage.setItem('currentUser', JSON.stringify(user));
  console.log('Local storage set:', localStorage.getItem('currentUser'));
}


//This checks if password is correct
function validPassword(a, pinInput){
			const pin = a.email;
			console.log(pin);
				console.log(`Comparing ${pin} with ${pinInput}`);
				return pin === pinInput;
				
				
			};
function fetchAndCompare(){
		fetch('https://jsonplaceholder.typicode.com/users')
			

		      .then(response => response.json())
		      .then(data => {

  //this validates user and returns object of user
		     const foundUser = data.find(user => {     
		   
		     	console.log(`Comparing ${user.username} with ${userInput}`);
  				const check = user.username === userInput;
  				if(check){
  					console.log("check working");
  					return user;
  				}
  				else{
  					return undefined;
  				}
  			
  			})

		     console.log(foundUser);
				if(foundUser){
						console.log("foundUser working");
					/*then*/console.log(validPassword(foundUser, pinInput));

						const finalValidation = validPassword(foundUser, pinInput);

					if(finalValidation){
						console.log("becker")
							loginCallback(userInput);
					window.location = "/home/atsu/rolandho/Dashboard 2/mainpage2/index.html";
					}
					else{
						alert("Invalid Username or Password");
					}
					
		      		}
		      	
		      	else{
		      		alert("Invalid Username or Password");
		      	} 
		      })
		      

		  };
  


const userName = document.getElementById('userref');
	const logButton = document.getElementById('button');
const password = document.getElementById('passwordref');

	logButton.addEventListener('click',	function(){
		userInput  = userName.value;
		pinInput = password.value;
		console.log("butttonclicked");
		fetchAndCompare();
		


	});