import styled from 'styled-components';

import Roles from '../../../utils/enums/Roles';

interface IStyledUserProps {
	role?: Roles;
}

const StyledUser = styled.div<IStyledUserProps>`
	margin-top: 5px;
	margin-left: -5px;
	padding: 5px;

	display: flex;
	align-items: center;

	cursor: pointer;

	border-radius: 4px;
	background-color: transparent;
	transition: background-color 0.2s;

	span {
		text-transform: none;
		font-size: 15px;

		color: ${props => (props.role ? props.role : 'var(--gray)')};
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

		margin-left: 12px;

		&.flag {
			margin-left: 9px;

			background-color: var(--discord);
			color: var(--white);

			border-radius: 4px;
			padding: 3px 4px;

			text-transform: uppercase;
			font-weight: bold;
			font-size: 10px;
		}
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export default StyledUser;
