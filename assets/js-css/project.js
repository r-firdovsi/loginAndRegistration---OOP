const profileArea = document.getElementById("user-head");

// Login Variable
const loginInputEmail = document.getElementById("inputEmail");
const loginInputPassword = document.getElementById("inputPassword");
const loginForm = document.getElementById("loginform");


// Registration Variable
const regForm = document.getElementById("registration-form");
const regInputName = document.getElementById("name-input");
const regInputLastName = document.getElementById("lastname-input");
const regInputEmail = document.getElementById("email-input");
const regInputPassword = document.getElementById("password-input");
const regButton = document.getElementById('registrbtn');
const formForReg = document.getElementById("form-for-registration");
let id = 0;

const login = new Login(loginForm,loginForm);

// addEventListener
loginForm.addEventListener("submit",loginNow);
regForm.addEventListener("submit",registration);


function loginNow(e) {
	login.login(loginInputEmail,loginInputPassword);
	e.preventDefault();
};


function registration(e) {
	id++;
	const ui = new UI(regInputName,regInputLastName,regInputEmail,regInputPassword,id,formForReg,loginForm,profileArea);
	ui.startRegistration();
	e.preventDefault();
	return id;
};



