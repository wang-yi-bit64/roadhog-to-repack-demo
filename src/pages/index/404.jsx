import React from "react"

const NotFound = ({location}) => (
	<div>
		<div className={styles.error}>
			404, {location.pathname}
		</div>
	</div>
)


export default NotFound
