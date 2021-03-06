import styled from 'styled-components';

const StyledUserList = styled.section`
	grid-area: sv-users;

	display: flex;
	flex-direction: column;

	padding: 3px 6px 0 16px;
	background-color: var(--secondary);

	max-height: calc(100vh - 46px);
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--tertiary);
		border-radius: 4px;
	}

	::-webkit-scrollbar-track {
		background-color: var(--secondary);
	}
`;

export default StyledUserList;
