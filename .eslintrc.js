module.exports = {
	"env": {
		"node": true,
		"es6": true,
		"browser": true,
	},
	"parserOptions": {
		"parser": "babel-eslint",
		"ecmaVersion": 6,
		"sourceType": "module" //es6 import
	},
	extends: [
		'plugin:vue/recommended'
	]
}