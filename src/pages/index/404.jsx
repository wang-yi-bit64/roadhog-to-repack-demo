import React from "react"
import {connect} from "dva"

const NotFound = ({location}) => (
	<div>
		<div className={styles.error}>
			404, {location.pathname}
		</div>
	</div>
)

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(NotFound)
