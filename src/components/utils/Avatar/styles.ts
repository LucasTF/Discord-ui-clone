import styled from 'styled-components';

interface IStyledAvatarProps {
	image?: string;
	size?: number;
}

const StyledAvatar = styled.div<IStyledAvatarProps>`
	height: ${props => (props.size ? props.size + 'px' : '34px')};
	width: ${props => (props.size ? props.size + 'px' : '34px')};
	border-radius: 50%;

	background-color: var(--gray);
	background-image: url(${props => (props.image ? props.image : '')});
	background-size: 100%;
	background-repeat: no-repeat;
`;

export default StyledAvatar;
