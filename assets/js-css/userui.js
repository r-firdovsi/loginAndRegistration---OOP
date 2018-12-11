let userInfoInput = document.querySelectorAll(".editprofile");
let backButton = document.getElementById("back");
let userInfoForm = document.getElementById("userinfoform");

const profileArea = document.getElementById("user-head");

let user = new Userinfo(userInfoInput[0],userInfoInput[1],userInfoInput[2],userInfoInput[3]);
let alert = new Alert();
let login = new Login();

// addEventListener
document.addEventListener("DOMContentLoaded", loadUserInfo);
backButton.addEventListener("click",function() {
	window.location.replace("https://r-firdovsi.github.io/loginAndRegistration---OOP/profile.html");
});
userInfoForm.addEventListener("submit",saveInfo);

function saveInfo(e) {
user.save();
alert.showSimpleAlert(userInfoForm,"success","Melumatlariniz Saxlanilmisdir..");
e.preventDefault();
};

function loadUserInfo() {
	login.checkLoginProEditPage(document.getElementById("foralert"));
	user.loadUserInfo();
};