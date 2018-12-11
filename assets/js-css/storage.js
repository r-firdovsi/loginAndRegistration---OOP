function Storage() {

};

// Storage.prototype = User.prototype;

Storage.prototype.addUserStorage = function(user) {
	let users = this.getUserFromStorage();
	let login = this.checklogInOut();

	users.push(user);
	login.push(user);
	localStorage.setItem("users",JSON.stringify(users));
	localStorage.setItem("login",JSON.stringify(login));
}

Storage.prototype.getUserFromStorage = function() {
	let users;

	if (localStorage.getItem("users") === null) {
		users = [];
	}else {
		users = JSON.parse(localStorage.getItem("users"));
	}
	return users;
};

Storage.prototype.checklogInOut = function() {
	let login;

	if (localStorage.getItem("login") === null) {
		login = [];
	}else {
		login = JSON.parse(localStorage.getItem("login"));
	}
	return login;
}