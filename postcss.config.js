module.exports = {
	modules: false,
	plugins: [
		require('postcss-import')({ path: 'src/styles' }),
		require('tailwindcss')('./tailwind.config.js'),
		require('postcss-preset-env')({
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
		}),
		require('postcss-encode-background-svgs'),
	],
};
