function Login() { };

Login.prototype = Storage.prototype;


Login.prototype.checkLogin = function(profileArea,alertArea)  {
	let checkLogin = this.checklogInOut();

	if (checkLogin.length !== 0) {
		this.profilePageLoad(profileArea);
	}else {
		alertArea.innerHTML = `<div class="alert alert-danger" role="alert">
 									  Xais olunur profilinize daxil olun..
									  </div>`;
		setTimeout(function() {
		window.location.replace("file:///home/r-firdovsi/Desktop/Social-OOP/index.html");	
		},3000)							  
	}
};

Login.prototype.checkLoginHomePage = function() {
	let checkLogin = this.checklogInOut();

	if (checkLogin.length !== 0) {
		window.location.replace("file:///home/r-firdovsi/Desktop/Social-OOP/profile.html");
	}

}

Login.prototype.checkLoginProEditPage = function(alertArea){
	let checkLogin = this.checklogInOut();

	alertArea.innerHTML = `<div class="alert alert-danger" role="alert">
 									  Xais olunur profilinize daxil olun..
									  </div>`;
		setTimeout(function() {
		window.location.replace("file:///home/r-firdovsi/Desktop/Social-OOP/index.html");	
		},3000)				
}

Login.prototype.login = function (email,password,alertArea)  {
	let users = this.getUserFromStorage();
	let login = this.checklogInOut();
	let alert = new Alert();
	
	users.forEach(function(user) {
		
		if(email.value.toLowerCase() == user.email && password.value == user.password) {
				login.push(user);
				localStorage.setItem("login",JSON.stringify(login));
				window.location.replace("file:///home/r-firdovsi/Desktop/Social-OOP/profile.html");
			}
	})

	alert.showSimpleAlert(alertArea,"danger","E-mail ve ya Sifre duzgun daxil edilmeyib");

};

Login.prototype.profilePageLoad = function(profileArea) {
	let nowLoginUser = this.checklogInOut();
	// let profileArea = this.profileArea;

	nowLoginUser.forEach(function(user) {
	let userInfo = `<p>RSocial'a Xos Geldiz ${user.name} ${user.lastname}</p>`;
	profileArea.innerHTML += userInfo;
	})
};

Login.prototype.logOutNow = function() {
	localStorage.removeItem("login");
	window.location.replace("file:///home/r-firdovsi/Desktop/Social-OOP/index.html");
};
