import styled from 'styled-components';

import avatar from '../../../assets/avatar.jpg';

const StyledAvatar = styled.div`
	height: 34px;
	width: 34px;
	border-radius: 50%;

	background-color: var(--gray);
	background-image: url(${avatar});
	background-size: 100%;
	background-repeat: no-repeat;
`;

export default StyledAvatar;
