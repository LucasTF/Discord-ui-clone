import React from 'react';

import StyledUserList from './styles';

import Role from './Role';
import User from './User';
import avatar from '../../assets/avatar.jpg';

import Status from '../../utils/enums/Status';
import Roles from '../../utils/enums/Roles';

const UserList: React.FC = () => {
	return (
		<StyledUserList>
			<Role title='Refugiado'>
				<User
					name='Lukka'
					avatar={avatar}
					status={Status.BUSY}
					role={Roles.REFUGIADO}
				/>
			</Role>
			<Role title='Bots'>
				<User name='Bot Imaginário' status={Status.AVAILABLE} isBot />
			</Role>
			<Role title='Disponível'></Role>
			<Role title='Offline'></Role>
		</StyledUserList>
	);
};

export default UserList;
