import styled from 'styled-components';

const StyledSidebar = styled.section`
	grid-area: sidebar;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: var(--tertiary);

	padding: 11px 0;

	max-height: 100vh;
	overflow-y: scroll;
	scrollbar-width: none;

	::-webkit-scrollbar {
		display: none;
	}
`;

export default StyledSidebar;
