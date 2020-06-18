import React from 'react';
import { FaHashtag } from 'react-icons/fa';

import StyledTopbar from './styles';

import Separator from '../utils/Separator';

const Topbar: React.FC = () => {
	return (
		<StyledTopbar>
			<FaHashtag />
			<h2>
				<span role='img' aria-label='chat'>
					💬
				</span>
				arena
			</h2>
			<Separator vertical />
			<span>Descrição</span>
		</StyledTopbar>
	);
};

export default Topbar;
