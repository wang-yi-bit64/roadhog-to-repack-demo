import dynamic from "dva/dynamic"

// nav data
export const getNavData = app => [
	{
		layoutName: "AppLayout",
		layout: dynamic({
			app,
			models: () => [],
			component: () => import("../layouts/appLayout")
		}),
		children: [
			{
				name: "Index",
				path: "/",
				component: dynamic({
					app,
					models: () => [
						import("../models/app")
					],
					component: () => import("../pages/index/index")
				})
			},
			{
				name: "用户",
				path: "/user",
				children: [
					{
						name: "列表",
						path: "/list",
						component: dynamic({
							app,
							models: () => [
								import("../models/app")
							],
							component: () => import("../pages/list/index")
						})
					}
				]
			},
		]
	},
	{
		layoutName: "LoginLayout",
		layout: dynamic({
			app,
			models: () => [],
			component: () => import("../layouts/blankLayout")
		}),
		children: [
			{
				name: "登录",
				path: "/login",
				component: dynamic({
					app,
					models: () => [
						import("../models/app")
					],
					component: () => import("../pages/index/login")
				})
			}
		]
	},
	{
		layoutName: "LogoutLayout",
		layout: dynamic({
			app,
			models: () => [],
			component: () => import("../layouts/blankLayout")
		}),
		children: [
			{
				name: "退出",
				path: "/logout",
				component: dynamic({
					app,
					models: () => [],
					component: () => import("../pages/index/logout")
				})
			}
		]
	}
]