const path = require("path");
const rootPath = path.join(__dirname, '..');
const vueSSRServerPlugin = require("vue-server-renderer/server-plugin");
module.exports = {
	// 不会将require的依赖打包进bundle
	target: 'node',
	entry: [rootPath + "/src/client/entry-server.js"],
	output: {
		libraryTarget: 'commonjs2'
	},
	plugins: [
		new vueSSRServerPlugin()
	],
}