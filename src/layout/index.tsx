import React from 'react';

import StyledLayout from './styles';

import Sidebar from '../components/Sidebar';
import ServerName from '../components/ServerName';
import Topbar from '../components/Topbar';
import ChannelList from '../components/ChannelList';
import UserBox from '../components/UserBox';

const Layout: React.FC = () => {
	return (
		<StyledLayout>
			<Sidebar />
			<ServerName />
			<Topbar />
			<ChannelList />
			<UserBox />
		</StyledLayout>
	);
};

export default Layout;
