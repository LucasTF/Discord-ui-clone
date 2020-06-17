import styled from 'styled-components';

const StyledCategory = styled.div`
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 6px;

		span {
			font-size: 12px;
			font-weight: 500;
			color: var(--gray);
		}

		svg {
			height: 21px;
			width: 21px;

			color: var(--gray);
			cursor: pointer;
		}
	}
`;

export default StyledCategory;
