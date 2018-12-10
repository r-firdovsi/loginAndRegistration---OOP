function Registration() {}

Registration.prototype = Object.create(Alert.prototype);

Registration.prototype.addUser = function(name,lastname,email,password,id) {
	const user = new User(name,lastname,email,password,id);
	this.addUserStorage(user);
}
