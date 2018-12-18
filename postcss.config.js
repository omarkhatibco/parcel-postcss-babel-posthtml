module.exports = {
	modules: false,
	plugins: {
		'postcss-import': { path: 'src/styles' },
		tailwindcss: './tailwind.config.js',
		'postcss-preset-env': {
			preserve: true,
			autoprefixer: { grid: 'autoplace' },
			stage: 1,
			features: {
				'color-mod-function': {
					unresolved: 'warn',
				},
				'custom-properties': {
					preserve: true,
				},
				'nesting-rules': true,
			},
		},
		'postcss-encode-background-svgs': {},
	},
};
