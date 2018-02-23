module.exports = {
	spec_dir  : "",
	spec_files: [
		/**
		 * All in src
		 */
		// "src/**/*[sS]pec.js",

		/**
		 * NodeModule
		 */
		// "src/NodeModule/**/*[sS]pec.js",
		"src/NodeModule/chokidar/index.spec.js",
	],
	helpers                     : [],
	stopSpecOnExpectationFailure: false,
	random                      : false
}
