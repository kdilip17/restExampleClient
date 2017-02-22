/**
 * Created by jaya on 19/08/15.
 */

/**
 * This class will set application configuration based on the environment
 * @type {*|exports}
 */

var document       = {
	"default": {
		name           : "onelogin",
		version        : "v0.0.1",
		ctrlPath       : 'lib/controller',
		emailVerifyLink: 'http://localhost/user/verify_email/',
		esIndex        : 'credait',
		"bunyan": {
			"env": "default"
		},
		smtp    : {
			host: 'smtp.mailgun.org',
			port: 587,
			auth: {
				user: 'postmaster@sandbox3436a002510848c197fbe68b27f7bdb1.mailgun.org',
				pass: '633e68fde2505a67dca6a0c1bffe1356'
			}
		}


	},
	"stage"  : {
		name           : "onelogin",
		version        : "v0.0.1",
		ctrlPath       : 'lib/controller',
		emailVerifyLink: 'http://api.stage.credait.tk/user/verify_email/',
		esIndex        : 'credait',
		"bunyan"       : {
			"env": "default"
		},
		smtp           : {
			host: 'smtp.mailgun.org',
			port: 587,
			auth: {
				user: 'postmaster@sandbox3436a002510848c197fbe68b27f7bdb1.mailgun.org',
				pass: '633e68fde2505a67dca6a0c1bffe1356'
			}
		}

	}, "dev" : {
		name           : "onelogin",
		version        : "v0.0.1",
		ctrlPath       : 'lib/controller',
		emailVerifyLink: 'http://api.dev.credait.tk/user/verify/',
		esIndex        : 'credait',
		"bunyan"       : {
			"env": "default"
		}
	},
	"test"   : {
		name           : "onelogin",
		version        : "v0.0.1",
		ctrlPath       : 'lib/controller',
		emailVerifyLink: 'http://api.test.credait.tk/user/verify_email/',
		esIndex        : 'credait',
		"bunyan"       : {
			"env": "default"
		},
		smtp           : {
			host: 'smtp.mailgun.org',
			port: 587,
			auth: {
				user: 'postmaster@sandbox3436a002510848c197fbe68b27f7bdb1.mailgun.org',
				pass: '633e68fde2505a67dca6a0c1bffe1356'
			}
		}

	}
};

var loadDocument = null;
var environment  = process.env.MODE;

if (environment == "stage") {
	loadDocument = document.stage;
}
else if (environment == "dev") {
	loadDocument = document.dev;
} else if (environment == "development") {
	loadDocument = document.development;
} else if (environment == "test") {
	loadDocument = document.test;
} else {
	loadDocument = document.default;
}

module.exports = loadDocument;

