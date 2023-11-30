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
				src="https://asset.cloudinary.com/dozv3jkth/fa0c21cfed222bd21c35d7acd88983bd"
				frameBorder="0"
				title="Boidushya's Resume"
			></Iframe>
		</BodyContent>
	);
};

export default ResumeContent;
