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
				src="https://drive.google.com/file/d/1Sqw8XyZZ_pdUf3S8dRdJkF0ffnT1kLRR/view?usp=sharing"
				frameBorder="0"
				title="Boidushya's Resume"
			></Iframe>
		</BodyContent>
	);
};

export default ResumeContent;
