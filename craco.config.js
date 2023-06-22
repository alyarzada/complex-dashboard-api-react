const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = function () {
	return {
		webpack: {
			plugins: [
				new WebpackBar(),
				new LodashModuleReplacementPlugin(),
				new BundleAnalyzerPlugin(),
			],
		},
	};
};
