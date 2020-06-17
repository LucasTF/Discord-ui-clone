import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import StyledServerName from './styles';

const ServerName: React.FC = () => {
	return (
		<StyledServerName>
			<p className='title'>Arena dos Refugiados</p>
			<MdKeyboardArrowDown />
		</StyledServerName>
	);
};

export default ServerName;
