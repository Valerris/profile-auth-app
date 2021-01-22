module.exports = {
	verbose: true,
	clearMocks: true,
	collectCoverage: true,
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	snapshotSerializers: [
		"<rootDir>/node_modules/enzyme-to-json/serializer.js",
	],
	transform: {
		"\\.[jt]sx?$": "babel-jest",
	},
	testPathIgnorePatterns: ["node_modules", "/.next/"],
	transformIgnorePatterns: [
		"node_modules",
		"^.+\\.module\\.(css|sass|scss)$",
	],
	moduleNameMapper: {
		"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
	},
	modulePaths: ["<rootDir>"],
};
