/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
	...require('@wordpress/prettier-config'),
	trailingComma: 'es5',
	tabWidth: 4,
	semi: true,
	singleQuote: true,
};

module.exports = config;
