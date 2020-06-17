import React from 'react';

import StyledChannelList from './styles';

import Category from './Category';
import ChannelButton from './ChannelButton';

const ChannelList: React.FC = () => {
	return (
		<StyledChannelList>
			<Category title='Bate papo'>
				<ChannelButton title='💬arena' selected />
				<ChannelButton title='🍊casinha-do-banido' />
				<ChannelButton title='💻programação' />
			</Category>
		</StyledChannelList>
	);
};

export default ChannelList;
