module.exports = {
	extends: 'airbnb',
	plugins: [
		'react',
		'react-native',
		'react-hooks'
	],
	parser: 'babel-eslint',
	env: {
		jest: true,
		'react-native/react-native': true,
	},
	rules: {
		indent: [2, 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'max-len': 0,
		'react/no-array-index-key': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-one-expression-per-line': 0,
		'no-use-before-define': 'off',
		'react/jsx-filename-extension': 'off',
		'react/prop-types': 'off',
		'comma-dangle': 'off',
		'padded-blocks': 'off',
		'arrow-body-style': 'off',
		'no-console': 0,
		'react-hooks/exhaustive-deps': 'warn',
		'react-native/no-unused-styles': 2,
		'react-native/split-platform-components': 2,
		'react-native/no-inline-styles': 2,
		'react-native/no-color-literals': 0,
		'react-native/no-raw-text': 0,
		'react-native/no-single-element-style-arrays': 2,
	},
	globals: {
		fetch: false
	}
};