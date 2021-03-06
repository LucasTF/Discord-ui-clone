import styled from 'styled-components';

const StyledChannelList = styled.section`
	grid-area: sv-channels;

	display: flex;
	flex-direction: column;

	padding: 8px 9.5px 0 16px;
	background-color: var(--secondary);

	overflow: scroll;

	::-webkit-scrollbar {
		display: none;
	}

	scrollbar-width: none;
`;

export default StyledChannelList;
