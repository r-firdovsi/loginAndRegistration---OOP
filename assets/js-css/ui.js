function UI(name,lastname,email,password,id,alertArea,logAndSigArea,profileArea) {
	this.name = name;
	this.lastname = lastname;
	this.email = email;
	this.password = password;
	this.id = id;
	this.alertArea = alertArea;
	this.logAndSigArea = logAndSigArea;
	this.profileArea = profileArea;
 }

UI.prototype = Object.create(Registration.prototype);

UI.prototype.startRegistration = function() {
	this.checkForSameEmail();
};


UI.prototype.checkForSameEmail = function() {
	 let users = this.getUserFromStorage();
	 let controle;

	 let userEmail = this.email;

	 users.forEach(function(user) {
	 	if (user.email == userEmail.value) {
	 		controle = true;
	 	}
	 	})

	 	if (controle !== true) {
	 		this.registration();
	 	} else {
	 		this.showAlert(this.alertArea,"danger","Xeta !","Bu e-mail adresi artiq movcuddur..");
	 		this.email.focus();
	 	} 

};

UI.prototype.registration = function() {
	this.addUser(this.name.value,this.lastname.value,this.email.value,this.password.value,this.id);
	 		this.showAlert(this.alertArea,"success","Tebrikler","Qeydiyyat ugurla basa catdi. Bir nece saniye erzinde profil seyfenize yonlendirileceksiz..");
	 		this.resetInput(this.name,this.lastname,this.email,this.password);


	 		
	 		setTimeout(function() {
	 			window.location.replace("file:///home/r-firdovsi/Desktop/Social-OOP/profile.html");
	 		},2000)
};

UI.prototype.resetInput = function() {
	this.name.value = "";
	this.lastname.value = "";
	this.email.value = "";
	this.password.value = "";
};




