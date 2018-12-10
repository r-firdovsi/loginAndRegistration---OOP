function Login(profileArea,alertArea) {
	this.profileArea = profileArea;
	this.alertArea = alertArea;
};

Login.prototype = Storage.prototype;


Login.prototype.checkLogin = function()  {
	let checkLogin = this.checklogInOut();

	if (checkLogin !== null) {
		this.profilePageLoad();
	}
};


Login.prototype.login = function (email,password)  {
	let users = this.getUserFromStorage();
	let login = this.checklogInOut();
	let alert = new Alert();
	
	users.forEach(function(user) {
		
		if(email.value == user.email && password.value == user.password) {
				login.push(user);
				localStorage.setItem("login",JSON.stringify(login));
				window.location.replace("https://r-firdovsi.github.io/loginAndRegistration---OOP/profile.html");
			}
	})

	alert.showLoginAlert(this.alertArea,"danger","E-mail ve ya Sifre duzgun daxil edilmeyib");

};

Login.prototype.profilePageLoad = function() {
	let nowLoginUser = this.checklogInOut();
	let profileArea = this.profileArea;

	nowLoginUser.forEach(function(user) {
	let userInfo = `<p>RSocial'a Xos Geldiz ${user.name} ${user.lastname}</p>`;
	profileArea.innerHTML += userInfo;
	})
};

Login.prototype.logOutNow = function() {
	localStorage.removeItem("login");
	window.location.replace("https://r-firdovsi.github.io/loginAndRegistration---OOP/index.html");
};
