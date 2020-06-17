import React from 'react';
import { MdAdd } from 'react-icons/md';

import StyledCategory from './styles';

interface ICategoryProps {
	title: string;
}

const Category: React.FC<ICategoryProps> = ({ title, children }) => {
	return (
		<StyledCategory>
			<div className='title'>
				<span>{title.toUpperCase()}</span>
				<MdAdd />
			</div>
			{children}
		</StyledCategory>
	);
};

export default Category;
