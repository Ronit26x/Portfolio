import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	border: none;
`;

const ResumeContent = () => {
	return (
		<BodyContent>
			<Iframe
				src="https://docs.google.com/document/d/1S5VJ0tEw870K7faZteUybAPWwTnQzF9mtyc85_cKvWY/edit?usp=sharing"
				frameBorder="0"
				title="Ronit's Resume"
			></Iframe>
		</BodyContent>
	);
};

export default ResumeContent;
