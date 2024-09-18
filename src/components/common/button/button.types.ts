import { ButtonHTMLAttributes } from 'react';
import { Colors } from '../../../types/colors.type';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'filled' | 'ghost' | 'bordered';
	shape?: 'default' | 'round' | 'square';
	size?: 'default' | 'wide' | 'full';
	bgColor?: Colors;
	textColor?: Colors;
};
