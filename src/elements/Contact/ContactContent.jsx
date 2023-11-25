import React from "react";
//eslint-disable-next-line
import styled from "styled-components";
import theme from "@styles/theme";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	max-width: 100%;
	height: 100%;
	border-radius: 0 0 0.6rem 0.6rem;
	border: 1px solid ${theme.bodyBorder};
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	position: relative;
	width: clamp(20rem, 30rem, 85vw);
`;

const MainSection = styled.ol`
	list-style: none;
	padding: 0.5rem;
	font-size: 1rem;

	background: rgba(32, 33, 39, 0.25);
	box-shadow: inset 0 0 0.1em rgb(255 255 255 / 50%);
	border: solid 1px rgba(40, 40, 40, 0.175);
	border-radius: 0.5rem;
	margin: 1.25rem 1rem;
	a {
		color: #c9cbdb;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
	li {
		padding: 0.25rem 0.75rem;
		cursor: pointer;
		display: flex;
		border-radius: 0.25rem;
	}
	li:not(:last-child) {
		margin-bottom: 0.5rem;
	}
	li:hover,
	li:active {
		background: #2a69c2;
		& a {
			color: #fff;
		}
		svg {
			color: rgb(255, 255, 255, 1);
		}
	}
	svg {
		display: inline;
		color: rgb(255, 255, 255, 0.15);
	}
	span {
		vertical-align: baseline;
		font-weight: 600;
	}
`;

const ResumeContent = () => {
	return (
		<Wrapper>
			<Container>
				<MainSection>
					<li>
						<a
							href="mailto:ronitbhansali2k1@gmail.com?subject=Hi Ronit!&amp;body=I'm coming from your website, are you up for a chat?"
							target="_blank"
							rel="noreferrer"
						>
							<span>Email</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
							</svg>
						</a>
					</li>
				</MainSection>
			</Container>
		</Wrapper>
	);
};

export default ResumeContent;
