import queryString from "query-string"


export default {
	namespace: "user",
	state: {
		user: null,
		isSiderFold: false,
		isNavBar: document.body.clientWidth < 769
	},
	reducers: {
		switchSider(state) {
			return {
				...state,
				isSiderFold: !state.isSiderFold
			}
		},
		saveNavBarState(state, {payload}) {
			return {
				...state,
				isNavBar: payload
			}
		},
		saveUser(state, {payload}) {
			return {
				...state,
				user: payload
			}
		}
	},
	effects: {
	},
	subscriptions: {
		setup({dispatch, history}) {
			history.listen((location) => {
				location.query = queryString.parse(location.search)
				console.log("history", history, location)
			})
		}
	}
}
