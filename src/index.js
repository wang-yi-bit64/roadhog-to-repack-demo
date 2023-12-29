import dva from "dva"
import createLoading from "dva-loading"
import "moment/locale/zh-cn"
import moment from "moment"
import {notification} from "antd"
import router from "./router"

moment.locale("zh-cn")

// 1. Initialize
const app = dva({
	...createLoading({
		effects: true
	}),
	onError(error) {
		const response = error.response
		if (response) {
			if (response.status === 401) {
				window.location.href = "/#/login"
			} else if (response.status === 404) {
				notification.warn({
					message: "请求的资源不存在"
				})
			} else if (response.status === 500) {
				notification.warn({
					message: response.data.error
				})
			} else {
				notification.warn({
					message: error.message
				})
			}
		} else {
			notification.warn({
				message: error.message
			})
		}
	}
})

// 2. Model
app.model(require("./models/user").default)
// 3. Router
app.router(router)

// 4. Start
app.start("#root")
