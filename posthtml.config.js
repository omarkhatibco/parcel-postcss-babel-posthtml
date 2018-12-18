const options = { root: './src' };
module.exports = {
	plugins: {
		'posthtml-extend': options,
		'posthtml-include': options,
		'posthtml-lorem': {},
		'posthtml-hint': {},
	},
};
