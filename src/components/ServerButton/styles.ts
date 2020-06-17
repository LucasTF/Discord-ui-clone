import styled from 'styled-components';

interface IStyledServerButtonProps {
	selected?: boolean;
	isHome?: boolean;
	hasNotifications?: boolean;
	mentions?: number;
}

const StyledServerButton = styled.button<IStyledServerButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;

	height: 48px;
	width: 48px;
	border-radius: 50%;

	margin-bottom: 8px;

	background-color: ${props =>
		props.selected ? 'var(--home)' : 'var(--primary)'};

	cursor: pointer;
	position: relative;

	img.discord-logo {
		height: 32px;
		width: 44px;
	}

	&::before {
		height: 9px;
		width: 9px;

		position: absolute;
		left: -17px;
		top: calc(50% - 4.5px);

		background-color: var(--white);
		border-radius: 50%;

		content: '';
		display: ${props => (props.hasNotifications ? 'inline' : 'none')};
	}

	&::after {
		height: 16px;
		width: auto;

		position: absolute;
		bottom: -4px;
		right: -4px;

		background-color: var(--notification);
		padding: 0 4px;

		border-radius: 12px;
		border: 4px solid var(--quaternary);

		text-align: right;
		font-size: 13px;
		font-weight: bold;
		color: var(--white);

        content: '${props => props.mentions}';
        display: ${props => (props.mentions ? 'inline' : 'none')}
	}

	transition: border-radius 0.2s, background-color 0.2s;

	&.active,
	&:hover {
		border-radius: 16px;
		background-color: ${props => (props.isHome ? 'var(--home)' : 'var(--discord)')};
	}
`;

export default StyledServerButton;
