import clsx from 'clsx';
import { ButtonProps } from './button.types';
import React from 'react';

// Define a mapping for background colors and text colors
const bgColorClasses = {
	primary: 'bg-primary',
	secondary: 'bg-secondary',
	lightContent: 'bg-lightContent',
	darkContent: 'bg-darkContent',
};

const textColorClasses = {
	primary: 'text-primary',
	secondary: 'text-secondary',
	lightContent: 'text-lightContent',
	darkContent: 'text-darkContent',
};

// Define a mapping for active transparency based on background color
const activeBgColorClasses = {
	primary: 'active:bg-primary/20',
	secondary: 'active:bg-secondary/20',
	lightContent: 'active:bg-lightContent/20',
	darkContent: 'active:bg-darkContent/20',
};

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
	children,
	size = 'default',
	shape = 'default',
	variant = 'filled',
	bgColor = 'primary',
	textColor = 'lightContent',
	...rest
}) => {
	const classes = clsx(
		// Size classes
		{
			'px-4 py-2': size === 'default' && shape !== 'square',
			'py-2 w-full': size === 'full',
			'py-2 w-52': size === 'wide',
		},
		// Shape classes
		{
			'rounded-lg': shape === 'default',
			'rounded-full': shape === 'round',
			'w-12 aspect-square': shape === 'square',
		},
		// Variant classes
		{
			'border border-transparent': variant === 'filled',
			border: variant === 'bordered',
			'border border-transparent bg-transparent': variant === 'ghost',
		},
		// Active state for ghost and bordered
		{
			'active:bg-opacity-50 text-primary':
				variant === 'ghost' || variant === 'bordered',
		},
		// Dynamic background color classes for filled variant
		bgColorClasses[bgColor],
		// Dynamic text color classes
		textColorClasses[textColor],
		// active transparent background color for ghost or bordered variant
		{
			[activeBgColorClasses[bgColor]]:
				variant === 'ghost' || variant === 'bordered',
		},
		// Add more styling like active, focus, etc.
		`transition-all active:opacity-90 outline-none focus:opacity-90 focus:scale-[0.98] flex justify-center items-center gap-2 font-normal text-lg`
	);

	return (
		<button className={classes} {...rest}>
			{children}
		</button>
	);
};
