import React from 'react';

import StyledRole from './styles';

interface IRoleProps {
	title: string;
}

const Role: React.FC<IRoleProps> = ({ title, children }) => {
	return (
		<StyledRole>
			<span>
				{title}--{React.Children.count(children)}
			</span>
			{children}
		</StyledRole>
	);
};

export default Role;
