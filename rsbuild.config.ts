import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
export default defineConfig({
	plugins: [pluginReact(), pluginSvgr()],
	server: {
		port: 8023,
		proxy: {
			'/api': {
				target: 'http://localhost:8000',
				changeOrigin: true,
				pathRewrite: { '^/api': '' },
			},
		}
	},
	performance: {
		removeConsole: true,
		removeMomentLocale: true,
	},
	source: {
		transformImport: [
			{
				libraryName: 'antd',
				libraryDirectory: 'es',
				style: true,
			}
		]
	},
	tools: {
		less: {
			implementation: require('less'),
		}
	}
});
