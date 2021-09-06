import { Typography } from "@material-ui/core";
import React from "react";

const Heading = ({ intro, heading }) => {

	return (
		<div style={{ textAlign: 'center', marginBottom: 20 }}>
			<Typography variant="h6" color="primary">{intro}</Typography>
			<Typography variant="h2" color="textPrimary">{heading}</Typography>
		</div>
	);
};

export default Heading;
