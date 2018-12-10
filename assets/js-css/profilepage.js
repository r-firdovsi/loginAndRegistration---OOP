const loginSignupArea = document.getElementById("loginandsignup");
const profileArea = document.getElementById("user-head");

// Profile Variable
let logOutBtn = document.getElementById("logout");
let editProfileBtn = document.getElementById("editprofile");

document.addEventListener("DOMContentLoaded", checkLogin);

const login = new Login(profileArea);

// addEventListener
logOutBtn.addEventListener("click",logOut);
// editProfileBtn.addEventListener("click",editProfile);


function checkLogin() {
login.checkLogin();
}

function editProfile() {

};

function logOut() {
	login.logOutNow();
};
