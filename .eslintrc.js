'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	globals: {
		window: true,
		angular: true
	},
	rules: {
		'comma-dangle': [
			'error',
			'never'
		],
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-character-class': 'error',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		// Disabled because of https://github.com/eslint/eslint/issues/6028
		// 'no-extra-parens': [
		// 	'error',
		// 	'all',
		// 	{
		// 		conditionalAssign: false,
		// 		nestedBinaryExpressions: false,
		// 		ignoreJSX: 'multi-line'
		// 	}
		// ],
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'off',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-misleading-character-class': 'error',
		'no-obj-calls': 'error',
		'no-prototype-builtins': 'warn',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'require-atomic-updates': 'error',
		'use-isnan': 'error',
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: false
			}
		],
		'no-unexpected-multiline': 'error',
		'accessor-pairs': 'error',
		'array-callback-return': 'off',
		'block-scoped-var': 'error',
		complexity: 'off',
		curly: 'error',
		'default-case': 'warn',
		'dot-notation': 'error',
		'dot-location': [
			'error',
			'property'
		],
		eqeqeq: 'warn',
		'guard-for-in': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'warn',
		'no-else-return': [
			'error',
			{
				allowElseIf: false
			}
		],
		'no-empty-pattern': 'error',
		'no-eq-null': 'warn',
		'no-eval': 'error',
		'no-extend-native': 'off',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-new': 'error',
		'no-octal-escape': 'error',
		'no-octal': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-assign': [
			'warn',
			'always'
		],
		'no-return-await': 'error',
		'no-script-url': 'warn',
		'no-self-assign': [
			'error',
			{
				props: true
			}
		],
		'no-self-compare': 'off',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'warn',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'warn',
		'no-useless-escape': 'warn',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off',
		'no-with': 'error',
		'prefer-promise-reject-errors': [
			'error',
			{
				allowEmptyReject: true
			}
		],
		radix: 'error',

		// Disabled for now as it causes too much churn
		// TODO: Enable it in the future when I have time to deal with
		// the churn and the rule is stable and has an autofixer
		// 'require-unicode-regexp': 'error',

		'wrap-iife': [
			'error',
			'inside',
			{
				functionPrototypeMethods: true
			}
		],
		yoda: 'error',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': [
			'error',
			'event'
		],
		'no-shadow-restricted-names': 'error',
		'no-undef-init': 'warn',
		'no-undef': [
			'off',
			{
				typeof: true
			}
		],
		'no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_$',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_$'
			}
		],
		'handle-callback-err': 'off',
		'no-buffer-constructor': 'error',
		'no-mixed-requires': [
			'error',
			{
				grouping: true,
				allowCall: true
			}
		],
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-restricted-imports': [
			'error',
			'domain',
			'freelist',
			'smalloc',
			'sys',
			'colors'
		],
		'no-restricted-modules': [
			'error',
			'domain',
			'freelist',
			'smalloc',
			'sys',
			'colors'
		],
		'array-bracket-newline': [
			'error',
			'consistent'
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'array-element-newline': [
			'error',
			'consistent'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: false
			}
		],
		camelcase: [
			'warn',
			{
				properties: 'always'
			}
		],
		'capitalized-comments': [
			'off',
			'always',
			{
				// You can also ignore this rule by wrapping the first word in quotes
				ignorePattern: 'pragma|ignore|prettier-ignore',
				ignoreInlineComments: true,
				ignoreConsecutiveComments: true
			}
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'eol-last': 'error',
		'func-call-spacing': [
			'error',
			'never'
		],
		'func-name-matching': [
			'off',
			{
				considerPropertyDescriptor: true
			}
		],
		'func-names': [
			'off',
			'as-needed'
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'jsx-quotes': 'error',
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': 'error',
		'linebreak-style': [
			process.platform === 'win32' ? 'off' : 'error',
			'unix'
		],
		'lines-between-class-members': [
			'error',
			'always'
		],
		'max-depth': 'warn',
		'max-nested-callbacks': [
			'warn',
			5
		],
		'max-params': [
			'off',
			{
				max: 4
			}
		],
		'max-statements-per-line': 'error',
		'new-cap': [
			'warn',
			{
				newIsCap: true,
				capIsNew: true
			}
		],
		'new-parens': 'error',
		'no-array-constructor': 'error',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'warn',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'warn',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1
			}
		],
		'no-negated-condition': 'warn',
		'no-new-object': 'error',
		'no-restricted-syntax': [
			'error',
			'WithStatement'
		],
		'no-whitespace-before-property': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'object-curly-spacing': [
			'error',
			'never'
		],
		// Disabled because of https://github.com/xojs/eslint-config-xo/issues/27
		// 'object-property-newline': 'error',
		'one-var': [
			'error',
			'never'
		],
		'one-var-declaration-per-line': 'error',
		'operator-assignment': [
			'off',
			'always'
		],
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': [
			'error',
			'never',
			{
				allowSingleLineBlocks: false
			}
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'multiline-block-like',
				next: '*'
			}
		],
		'quote-props': [
			'error',
			'as-needed'
		],
		quotes: [
			'error',
			'single'
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'semi-style': [
			'error',
			'last'
		],
		semi: [
			'error',
			'always'
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: [
						'-',
						'+',
						'*'
					],
					markers: [
						'!',
						'/',
						'=>'
					]
				},
				block: {
					exceptions: [
						'-',
						'+',
						'*'
					],
					markers: [
						'!',
						'*'
					],
					balanced: true
				}
			}
		],
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'template-tag-spacing': [
			'error',
			'never'
		],
		'unicode-bom': [
			'error',
			'never'
		],
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'constructor-super': 'error',
		'generator-star-spacing': [
			'error',
			'both'
		],
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-new-symbol': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': [
			'error',
			'never'
		],
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': [
			'error',
			'both'
		],
		'valid-jsdoc': [
			'off',
			{
				requireReturn: false,
				requireParamDescription: true,
				requireReturnDescription: true
			}
		]
	}
};