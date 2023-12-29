const rspack = require("@rspack/core");
const refreshPlugin = require("@rspack/plugin-react-refresh");
const isDev = process.env.NODE_ENV === "development";
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: "./src/index.js",
	output: {
		filename: "[name][contenthash].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				type: "asset",
			},
			{
				test: /\.less$/,
				use: [{
					loader: "less-loader",
					options: {
						sourceMap: true,
						lessOptions: {
							javascriptEnabled: true,
						}
					}
				}],
				type: 'css'
			},
			{
				test: /\.js$/,
				use: {
					loader: "builtin:swc-loader",
					options: {
						sourceMap: true,
						jsc: {
							parser: {
								syntax: "ecmascript",
								dynamicImport: true,
								jsx: true,
								exportDefaultFrom: true
							},
							transform: {
								react: {
									development: isDev,
									refresh: isDev,
								},
							},
						},
						rspackExperiments: {
							import: [
								{
									libraryName: 'antd',
									style: true,
								},
							],
							styledComponents: {
								displayName: true,
								ssr: true,
								fileName: true,
								meaninglessFileNames: ['index', 'styles'],
								pure:true
							},
							transpileTemplateLiterals: true,
							minify: true,
							pure: true,
							cssProps: true,
						},
						env: {
							targets: [
								"chrome >= 87",
								"edge >= 88",
								"firefox >= 78",
								"safari >= 14",
							],
						},
						type: "javascript/auto",
					},
				},
			},
			{
				test: /\.jsx$/,
				use: {
					loader: "builtin:swc-loader",
					options: {
						sourceMap: true,
						jsc: {
							parser: {
								syntax: "ecmascript",
								dynamicImport: true,
								jsx: true,
								exportDefaultFrom: true
							},
							transform: {
								react: {
									development: isDev,
									refresh: isDev,
								},
							},
						},
						rspackExperiments: {
							import: [
								{
									libraryName: 'antd',
									style: true,
								},
							],
							styledComponents: {
								displayName: true,
								ssr: true,
								fileName: true,
								meaninglessFileNames: ['index', 'styles'],
							},
							transpileTemplateLiterals: true,
							minify: true,
							pure: true,
							cssProps: true,
						},
						env: {
							targets: [
								"chrome >= 87",
								"edge >= 88",
								"firefox >= 78",
								"safari >= 14",
							],
						},
						type: "javascript/auto",
					},
				},
			},
		]
	},
	plugins: [
		new rspack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		}),
		new rspack.ProgressPlugin({}),
		new rspack.HtmlRspackPlugin({
			template: "./index.html"
		}),
		isDev ? new refreshPlugin() : null
	].filter(Boolean),
	devServer: {
		port: 8023,
		hot: true,
		historyApiFallback: true,
		proxy: {
			"/api": {
				target: "http://localhost:8085",
				changeOrigin: true,
			},
		},
	},
	experiments: {
		rspackFuture: {
			disableTransformByDefault: true,
		},
	},
	optimization: {
		providedExports: true,
	}
};
