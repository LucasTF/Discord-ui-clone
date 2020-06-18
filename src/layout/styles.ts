import styled from 'styled-components';

const StyledLayout = styled.div`
	display: grid;
	grid-template-columns: 71px 240px auto 240px;
	grid-template-rows: 46px auto 52px;
	grid-template-areas:
		'sidebar sv-name topbar topbar'
		'sidebar sv-channels sv-chat sv-users'
		'sidebar user-box sv-chat sv-users';

	height: 100vh;
`;

export default StyledLayout;
