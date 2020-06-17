import styled from 'styled-components';

const StyledServerName = styled.div`
	grid-area: sv-name;

	height: 48px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 13px 0 16px;

	background-color: var(--secondary);

	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
	z-index: 2;

	cursor: pointer;

	.title {
		font-size: 15px;
		font-weight: bold;

		color: var(--white);
	}

	svg {
		height: 20px;
		width: 20px;

		color: var(--gray);
	}

	&:hover {
		background-color: var(--quinary);
	}
`;

export default StyledServerName;
