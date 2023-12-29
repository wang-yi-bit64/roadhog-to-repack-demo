import React from "react"
import {connect} from "dva"
import {Spin} from "antd"

const Logout = ({loading}) => (
	<div>
		<Spin delay={10000} size="large"/>
		<div >
			退出
		</div>
	</div>
)

const mapStateToProps = ({app}) => ({app})

export default connect(mapStateToProps)(Logout)
