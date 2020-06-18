import React from 'react';
import { FaHashtag } from 'react-icons/fa';
import { IoMdVolumeHigh } from 'react-icons/io';
import { BsPersonPlusFill, BsGearFill } from 'react-icons/bs';

import StyledChannelButton from './styles';

interface IChannelButtonProps {
	title: string;
	selected?: boolean;
	isAudio?: boolean;
}

const ChannelButton: React.FC<IChannelButtonProps> = ({
	title,
	selected,
	isAudio,
}) => {
	return (
		<StyledChannelButton
			className={selected ? 'active' : ''}
			isAudio={isAudio}
		>
			<div className='channel'>
				{isAudio ? <IoMdVolumeHigh /> : <FaHashtag />}
				<span>{title}</span>
			</div>
			<div className='options'>
				<BsPersonPlusFill />
				<BsGearFill />
			</div>
		</StyledChannelButton>
	);
};

export default ChannelButton;
