import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ['**/public', '**/dest', '**/node_modules'],
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	...compat.extends(
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier'
	),

	{
		plugins: {
			react,
		},

		languageOptions: {
			globals: {
				...globals.browser,
			},

			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		rules: {
			indent: ['warn', 'tab'],
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
		},
	},
];
