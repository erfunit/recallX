import { forwardRef } from 'react';
import clsx from 'clsx';
import { InputProps } from './input.types';

const bgColorClasses = {
	primary: 'bg-primary/10',
	secondary: 'bg-secondary/10',
	lightContent: 'bg-lightContent/10',
	darkContent: 'bg-darkContent/10',
};

const textColorClasses = {
	primary: 'text-primary',
	secondary: 'text-secondary',
	lightContent: 'text-lightContent',
	darkContent: 'text-darkContent',
};

const borderColorClasses = {
	primary: 'border-primary',
	secondary: 'border-secondary',
	lightContent: 'border-lightContent',
	darkContent: 'border-darkContent',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			variant = 'outlined',
			size = 'medium',
			bgColor = 'lightContent',
			textColor = 'darkContent',
			leftIcon,
			rightIcon,
			className,
			...rest
		},
		ref
	) => {
		const inputClasses = clsx(
			'w-full transition-all outline-none',
			{
				'border rounded-md': variant === 'outlined',
				'border-b': variant === 'underlined',
				'rounded-md': variant === 'filled',
			},
			{
				'px-3 py-1 text-sm': size === 'small',
				'px-4 py-2 text-base': size === 'medium',
				'px-5 py-3 text-lg': size === 'large',
			},
			bgColorClasses[bgColor],
			textColorClasses[textColor],
			borderColorClasses[textColor],
			'focus:ring-2 focus:ring-opacity-50',
			{
				'pl-10': leftIcon,
				'pr-10': rightIcon,
			},
			className
		);

		const iconClasses = clsx(
			'absolute top-1/2 transform -translate-y-1/2',
			textColorClasses[textColor]
		);

		return (
			<div className='relative w-full'>
				{leftIcon && (
					<span className={clsx(iconClasses, 'left-3')}>{leftIcon}</span>
				)}
				<input ref={ref} className={inputClasses} {...rest} />
				{rightIcon && (
					<span className={clsx(iconClasses, 'right-3')}>{rightIcon}</span>
				)}
			</div>
		);
	}
);

Input.displayName = 'Input';
