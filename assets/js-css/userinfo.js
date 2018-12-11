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

Userinfo.prototype.save = function() {
	let loginedUser = this.checklogInOut();
	let allUsers = this.getUserFromStorage();
	let inputForName = this.inputForName;
	let inputForLastname = this.inputForLastname;
	let inputForEmail = this.inputForEmail;
	let inputForPassword = this.inputForPassword;
	let users = new User(this.inputForName.value,this.inputForLastname.value,this.inputForEmail.value,this.inputForPassword.value);
	
	allUsers.forEach(function(user) {

		if(loginedUser[0].email == user.email && loginedUser[0].password == user.password) {
			allUsers.splice(allUsers.indexOf(user),1);
			allUsers.push(users);
			localStorage.setItem("users",JSON.stringify(allUsers));
			console.log(localStorage);
		};
	})

	loginedUser.splice(0,1);
	loginedUser.push(users);
	localStorage.setItem("login",JSON.stringify(loginedUser));

};

