import { HTMLAttributes } from 'react';

type Colors = 'primary' | 'secondary' | 'darkContent' | 'lightContent';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	variant?: 'filled' | 'ghost' | 'bordered';
	shape?: 'default' | 'round' | 'square';
	size?: 'default' | 'wide' | 'full';
	bgColor?: Colors;
	textColor?: Colors;
};
