import React from 'react';
import { MdAdd } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

import StyledCategory from './styles';

interface ICategoryProps {
	title: string;
}

const Category: React.FC<ICategoryProps> = ({ title, children }) => {
	return (
		<StyledCategory>
			<div className='title'>
				<RiArrowDropDownLine className='dropdown' />
				<span>{title.toUpperCase()}</span>
				<MdAdd className='add' />
			</div>
			{children}
		</StyledCategory>
	);
};

export default Category;
