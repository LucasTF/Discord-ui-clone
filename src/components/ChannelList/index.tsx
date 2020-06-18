import React from 'react';

import StyledChannelList from './styles';

import Category from './Category';
import ChannelButton from './ChannelButton';

const ChannelList: React.FC = () => {
	return (
		<StyledChannelList>
			<Category title='Grupo'>
				<ChannelButton title='🤝boas-vindas' />
				<ChannelButton title='🎮escolha-sua-facção' />
				<ChannelButton title='🚨anúncios' />
			</Category>
			<Category title='Bate papo'>
				<ChannelButton title='💬arena' selected />
				<ChannelButton title='🍊casinha-do-banido' />
				<ChannelButton title='💻programação' />
			</Category>
			<Category title='Conteúdo'>
				<ChannelButton title='💎pérolas' />
				<ChannelButton title='🔽downloads' />
				<ChannelButton title='🛒promoções' />
				<ChannelButton title='🎵divulgue-músicas' />
				<ChannelButton title='📷prints-de-jogos' />
				<ChannelButton title='🎥videos' />
			</Category>
			<Category title='Jogos'>
				<ChannelButton title='🖊gartic' />
			</Category>
			<Category title='Solta a voz'>
				<ChannelButton title='🚿 Chuveiro 01' isAudio />
				<ChannelButton title='🚿 Chuveiro 02' isAudio />
				<ChannelButton title='🚿 Chuveiro 03' isAudio />
			</Category>
		</StyledChannelList>
	);
};

export default ChannelList;
