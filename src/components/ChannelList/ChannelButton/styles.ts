import styled from 'styled-components';

const StyledChannelButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 5px 3px;
	border-radius: 5px;

	background-color: transparent;

	transition: background-color 0.2s;

	cursor: pointer;

	div {
		display: flex;
		align-items: center;
	}

	.channel {
		svg {
			height: 20px;
			width: 20px;

			color: var(--symbol);
		}

		span {
			font-size: 15px;
			color: var(--senary);

			margin-left: 5px;
		}
	}

	.options {
		svg {
			height: 14px;
			width: 14px;
			margin: 0 3px;

			color: var(--symbol);
			cursor: pointer;

			transition: color 0.2s;

			&:hover {
				color: var(--white);
			}
		}
	}

	&:hover,
	&:active {
		background-color: var(--quinary);

		.channel span {
			color: var(--white);
		}
	}
`;

export default StyledChannelButton;
