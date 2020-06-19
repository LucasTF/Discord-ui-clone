import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdHeadset } from 'react-icons/io';
import { BsGearFill } from 'react-icons/bs';

import Status from '../../utils/enums/Status';
import StyledUserBox from './styles';

import avatar from '../../assets/avatar.jpg';

import Avatar from '../utils/Avatar';

const UserBox: React.FC = () => {
	return (
		<StyledUserBox>
			<div className='profile'>
				<Avatar status={Status.AWAY} image={avatar} />
				<div className='user-info'>
					<h5>Lukka</h5>
					<h6>#8109</h6>
				</div>
			</div>
			<div className='icons'>
				<FaMicrophone />
				<IoMdHeadset />
				<BsGearFill />
			</div>
		</StyledUserBox>
	);
};

export default UserBox;
