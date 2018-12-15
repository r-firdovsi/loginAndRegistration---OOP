function Userinfo (inputForName,inputForLastname,inputForEmail,inputForPassword) {
	this.inputForName = inputForName;
	this.inputForLastname = inputForLastname;
	this.inputForEmail = inputForEmail;
	this.inputForPassword = inputForPassword;
}

Userinfo.prototype = Login.prototype;

Userinfo.prototype.loadUserInfo = function() {
	let loginedUser = this.checklogInOut();

	this.inputForName.value = loginedUser[0].name;
	this.inputForLastname.value = loginedUser[0].lastname;
	this.inputForEmail.value = loginedUser[0].email;
	this.inputForPassword.value = loginedUser[0].password;
};

Userinfo.prototype.checkEmail = function(setEmail,alertArea) {
		let users = this.getUserFromStorage();
		let login = this.checklogInOut();
	 	let controle;

	 	let userEmail = setEmail;

	 users.forEach(function(user) {
	 	if (user.email == userEmail.value && userEmail.value !== login[0].email) {
	 		controle = true;
	 	}
	 	})

	 	if (controle !== true) {
	 		this.save();
	 		alert.showSimpleAlert(alertArea,"success","Melumatlariniz Saxlanilmisdir..");
	 	} else {
	 		alert.showSimpleAlert(alertArea,"danger","Bu e-mail basqa bir istifadeciye mexsusudur..");
	 		setEmail.focus();
	 	} 
};

Userinfo.prototype.save = function() {
	let loginedUser = this.checklogInOut();
	let allUsers = this.getUserFromStorage();
	let inputForName = this.inputForName;
	let inputForLastname = this.inputForLastname;
	let inputForEmail = this.inputForEmail;
	let inputForPassword = this.inputForPassword;

	let users = new User(inputForName.value,inputForLastname.value,inputForEmail.value,inputForPassword.value);
	
	allUsers.forEach(function(user) {

		if(loginedUser[0].email == user.email && loginedUser[0].password == user.password) {
			allUsers.splice(allUsers.indexOf(user),1);
			allUsers.push(users);
			localStorage.setItem("users",JSON.stringify(allUsers));
		};
	})

	loginedUser.splice(0,1);
	loginedUser.push(users);
	localStorage.setItem("login",JSON.stringify(loginedUser));

};

