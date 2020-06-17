import React from 'react';

import StyledLayout from './styles';

import Sidebar from '../components/Sidebar';

const Layout: React.FC = () => {
	return (
		<StyledLayout>
			<Sidebar />
		</StyledLayout>
	);
};

export default Layout;
