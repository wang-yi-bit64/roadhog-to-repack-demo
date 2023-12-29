import React from "react"
import {Route, Switch} from "dva/router"

export default ({navData}) => (<div>
	<Switch>
		{
			navData.map(item => (
				<Route
					exact
					key={item.path}
					path={item.path}
					component={item.component}
				/>
			))
		}
	</Switch>
</div>)
