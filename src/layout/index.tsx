import React from 'react';

import StyledLayout from './styles';

import Sidebar from '../components/Sidebar';
import ServerName from '../components/ServerName';

const Layout: React.FC = () => {
	return (
		<StyledLayout>
			<Sidebar />
			<ServerName />
		</StyledLayout>
	);
};

export default Layout;
