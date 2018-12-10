function Alert() {}

Alert.prototype = Object.create(Storage.prototype);

Alert.prototype.showAlert = function(alertArea,alertType,alertHead,alertMessage) {

	const alert = document.createElement("div");
	alert.className = `alert alert-${alertType}`;

	const head = document.createElement("h4");
	head.className = "alert-heading";
	head.textContent = alertHead;

	const hr = document.createElement("hr");
	alert.appendChild(head);
	alert.appendChild(hr);

	const message = document.createElement("p");
	message.textContent = alertMessage;
	alert.appendChild(message);

	alertArea.appendChild(alert);
	
	setTimeout(function() {
		alert.remove();
	},3000);					  
};

Alert.prototype.showLoginAlert = function(alertArea,alertType,alertMessage) {
	const alert = document.createElement("div");
	alert.className = `alert alert-${alertType}`;
	alert.textContent = alertMessage;

	alertArea.appendChild(alert);

	setTimeout(function() {
		alert.remove();
	},3000);
};