let userInfoInput = document.querySelectorAll(".editprofile");
let backButton = document.getElementById("back");
let userInfoForm = document.getElementById("userinfoform");
let forAlert = document.getElementById("userinfo");

const profileArea = document.getElementById("user-head");

let user = new Userinfo(userInfoInput[0],userInfoInput[1],userInfoInput[2],userInfoInput[3]);
let alert = new Alert();
let login = new Login();


//For collapse
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
};

// addEventListener
document.addEventListener("DOMContentLoaded", loadUserInfo);
backButton.addEventListener("click",function() {
	window.location.replace(config.getConfig('profilPageUrl'));
});
userInfoForm.addEventListener("submit",saveInfo);

function saveInfo(e) {
user.checkEmail(userInfoInput[2],forAlert);
e.preventDefault();
};

function loadUserInfo() {
	login.checkLoginProEditPage(document.getElementById("foralert"));
};