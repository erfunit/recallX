import React, { InputHTMLAttributes } from 'react';
import { Colors } from '../../../types/colors.type';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
	variant?: 'outlined' | 'filled' | 'underlined';
	size?: 'small' | 'medium' | 'large';
	bgColor?: Colors;
	textColor?: Colors;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
};
