import styled from 'styled-components';

const StyledUserBox = styled.section`
	grid-area: user-box;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;

	padding: 10px;
	background-color: var(--quaternary);
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

	.profile {
		display: flex;
		align-items: center;

		.user-info {
			margin-left: 8px;

			display: flex;
			flex-direction: column;

			h5 {
				color: var(--white);
			}

			h6 {
				color: var(--gray);
				font-weight: 400;
			}
		}
	}

	.icons {
		display: flex;
		align-items: center;

		svg {
			height: 30px;
			width: 30px;
			color: var(--white);
			opacity: 0.7;
			border-radius: 8px;

			padding: 6px;

			transition: opacity 0.2s;
			transition: background-color 0.2s;
			cursor: pointer;

			&:hover {
				opacity: 1;
				background-color: var(--quinary);
			}
		}
	}
`;

export default StyledUserBox;
