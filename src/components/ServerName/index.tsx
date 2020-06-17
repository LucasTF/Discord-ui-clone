import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import StyledServerName from './styles';

const ServerName: React.FC = () => {
	return (
		<StyledServerName>
			<h1 className='title'>Arena dos Refugiados</h1>
			<MdKeyboardArrowDown />
		</StyledServerName>
	);
};

export default ServerName;
