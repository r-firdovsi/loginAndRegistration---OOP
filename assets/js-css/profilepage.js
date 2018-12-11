const loginSignupArea = document.getElementById("loginandsignup");
const profileArea = document.getElementById("user-head");

// Profile Variable
let logOutBtn = document.getElementById("logout");
let editProfileBtn = document.getElementById("editprofile");

document.addEventListener("DOMContentLoaded", checkLogin);

const login = new Login();

// addEventListener
logOutBtn.addEventListener("click",logOut);
editProfileBtn.addEventListener("click", function() {
	window.location.replace("https://r-firdovsi.github.io/loginAndRegistration---OOP/profileedit.html");
});


function checkLogin() {
login.checkLogin(profileArea,document.getElementById("foralert"));
}



function logOut() {
	login.logOutNow();
};
