import React from 'react';

import { VerticalSeparator, HorizontalSeparator } from './styles';

interface ISeparatorProps {
	vertical?: boolean;
}

const Separator: React.FC<ISeparatorProps> = ({ vertical }) => {
	return vertical ? <VerticalSeparator /> : <HorizontalSeparator />;
};

export default Separator;
