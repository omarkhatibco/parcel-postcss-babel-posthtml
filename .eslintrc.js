module.exports = {
	root: true,
	extends: ['xo', 'xo/esnext', 'xo/browser', 'plugin:prettier/recommended'],
	env: {
		node: true,
		es6: true,
		amd: true,
		browser: true,
		jquery: false,
	},
	parserOptions: {
		ecmaFeatures: {
			globalReturn: true,
			generators: false,
		},
		ecmaVersion: 8,
		sourceType: 'module',
	},
	rules: {
		'no-console': 0,
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
	},
};
