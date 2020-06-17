import React from 'react';

import Logo from '../../assets/discord.svg';
import StyledServerButton from './styles';

interface IServerButtonProps {
	selected?: boolean;
	isHome?: boolean;
	hasNotifications?: boolean;
	mentions?: number;
}

const ServerButton: React.FC<IServerButtonProps> = ({
	selected,
	isHome,
	hasNotifications,
	mentions,
}) => {
	return (
		<StyledServerButton
			isHome={isHome}
			hasNotifications={hasNotifications}
			mentions={mentions}
			className={selected ? 'active' : ''}
		>
			{isHome && (
				<img className='discord-logo' src={Logo} alt='Logo Discord' />
			)}
		</StyledServerButton>
	);
};

export default ServerButton;
