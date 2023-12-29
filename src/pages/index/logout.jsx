import React from "react"
import {connect} from "dva"
import {Spin} from "antd"

const Logout = ({loading}) => (
	<div>
		<Spin spinning={loading.effects["app/logoutAndRedirect"]} delay={10000} size="large"/>
		<div hidden={!loading.effects["app/logoutAndRedirect"]}>
			退出
		</div>
	</div>
)

const mapStateToProps = ({app, loading}) => ({app, loading})

export default connect(mapStateToProps)(Logout)
