import React from 'react';

import StyledSidebar from './styles';

import ServerButton from '../ServerButton';
import Separator from '../utils/Separator';

const Sidebar: React.FC = () => {
	return (
		<StyledSidebar>
			<ServerButton isHome />

			<Separator />

			<ServerButton hasNotifications />
			<ServerButton mentions={1} />
			<ServerButton />
			<ServerButton />
			<ServerButton mentions={3} />
			<ServerButton hasNotifications />
			<ServerButton />
			<ServerButton hasNotifications />
			<ServerButton mentions={1} />
		</StyledSidebar>
	);
};

export default Sidebar;
