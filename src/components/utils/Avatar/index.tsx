import React from 'react';

import Status from '../../../utils/enums/Status';
import StyledAvatar from './styles';

interface IAvatarProps {
	status: Status;
	image?: string;
	size?: number;
}

const Avatar: React.FC<IAvatarProps> = ({ status, image, size }) => {
	return <StyledAvatar image={image} size={size} />;
};

export default Avatar;
