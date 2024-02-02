const esModules = [''].join('|');
module.exports = {
	verbose: true,
	testEnvironment: 'jsdom',
	collectCoverage: true,
	collectCoverageFrom: [
		'src/app/designs/**/*.{js,jsx,ts,tsx}',
		'src/app/pages/**/*.{js,jsx,ts,tsx}',
		'src/app/routes/**/*.{js,jsx,ts,tsx}',
	],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0,
		},
	},
	transform: {
		'^.+\\.[t|j]sx?$': 'babel-jest',
		// '\\.css$': '<rootDir>/__mocks__/fileTransformer.js',
	},
	transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	// setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
	// moduleNameMapper: {
	// 	'^axios$': require.resolve('axios'),
	// },
	globals: {
		// remoteConfig: {
		// 	scope: 'sandbox',
		// 	rootPath: 'sandbox',
		// 	dev: {
		// 		selector: 'sandbox-dev-root',
		// 		port: 8082,
		// 	},
		// 	modules: {
		// 		'./SandboxMFE': './src/mfe/bootstrapSandbox',
		// 		'./sandboxMenu': './src/menu',
		// 	},
		// },
	},
};
