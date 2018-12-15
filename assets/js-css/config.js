var config = {
	enviorment : 'development',
	production : {
		indexPageUrl : "https://r-firdovsi.github.io/loginAndRegistration---OOP/index.html",
		profilEditPageUrl : "https://r-firdovsi.github.io/loginAndRegistration---OOP/profileedit.html",
		profilPageUrl : "https://r-firdovsi.github.io/loginAndRegistration---OOP/profile.html"
	},
	development : {
		indexPageUrl: "file:///home/r-firdovsi/Desktop/loginAndRegistration---OOP/index.html",
		profilEditPageUrl: "file:///home/r-firdovsi/Desktop/loginAndRegistration---OOP/profileedit.html",
		profilPageUrl : "file:///home/r-firdovsi/Desktop/loginAndRegistration---OOP/profile.html"
	},

	getConfig : function(key) {
		if (this.enviorment == "development") {
			return this.development[key]
		} else {
			return this.production[key]
		}
	}
}