import React from 'react';

import Status from '../../../utils/enums/Status';
import Roles from '../../../utils/enums/Roles';
import StyledUser from './styles';

import Avatar from '../../utils/Avatar';

interface IUserProps {
	name: string;
	avatar?: string;
	status: Status;
	role?: Roles;
	isBot?: boolean;
}

const User: React.FC<IUserProps> = ({ name, avatar, status, role, isBot }) => {
	return (
		<StyledUser role={role}>
			<Avatar status={status} image={avatar} size={34} />
			<span>{name}</span>
			{isBot && <span className='flag'>BOT</span>}
		</StyledUser>
	);
};

export default User;
