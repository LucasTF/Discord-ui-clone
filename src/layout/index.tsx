import React from 'react';

import StyledLayout from './styles';

import Sidebar from '../components/Sidebar';
import ServerName from '../components/ServerName';
import Topbar from '../components/Topbar';

const Layout: React.FC = () => {
	return (
		<StyledLayout>
			<Sidebar />
			<ServerName />
			<Topbar />
		</StyledLayout>
	);
};

export default Layout;
