import styled from 'styled-components';

const StyledTopbar = styled.section`
	grid-area: topbar;

	height: 48px;

	display: flex;
	flex-direction: row;
	align-items: center;

	padding: 0 17px;
	background-color: var(--primary);

	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
	z-index: 2;

	svg {
		height: 20px;
		width: 20px;

		color: var(--symbol);
	}

	h2 {
		margin-left: 9px;

		font-size: 16px;
		color: var(--white);
	}

	span {
		font-size: 15px;
		color: var(--gray);
	}
`;

export default StyledTopbar;
