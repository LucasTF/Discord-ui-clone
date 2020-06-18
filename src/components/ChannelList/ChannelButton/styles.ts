import styled from 'styled-components';

interface IStyledChannelButtonProps {
	isAudio?: boolean;
}

const StyledChannelButton = styled.div<IStyledChannelButtonProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: 2px 0;
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
			text-transform: ${props => (props.isAudio ? 'none' : 'lowercase')};

			margin-left: 5px;
		}
	}

	.options {
		display: none;
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
	&:active,
	&.active {
		background-color: var(--quinary);

		.channel span {
			color: var(--white);

			overflow: hidden;
			max-width: 136px;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.options {
			display: flex;
		}
	}
`;

export default StyledChannelButton;
