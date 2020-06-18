import styled from 'styled-components';

const StyledCategory = styled.div`
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		margin: 12px 0 6px 0;

		position: relative;
		cursor: pointer;

		svg.dropdown {
			position: absolute;
			left: -15px;

			color: var(--gray);
		}

		span {
			font-size: 12px;
			font-weight: bold;
			color: var(--gray);
		}

		svg.add {
			height: 21px;
			width: 21px;

			color: var(--gray);
		}

		&:hover {
			span,
			svg.dropdown {
				color: var(--white);
			}
		}
	}
`;

export default StyledCategory;
