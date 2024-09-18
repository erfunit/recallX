import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '../../src/components/common/button';

// Mock ButtonProps to use in the tests
const buttonText = 'Click Me';

// Helper function to render Button with specific props
const renderButton = (props = {}) => {
	return render(<Button {...props}>{buttonText}</Button>);
};

describe('Button Component', () => {
	it('renders with default props', () => {
		renderButton();

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			'bg-primary',
			'text-lightContent',
			'px-4',
			'py-2'
		);
	});

	it('renders with size "full"', () => {
		renderButton({ size: 'full' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('w-full', 'py-2');
	});

	it('renders with size "wide"', () => {
		renderButton({ size: 'wide' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('w-52', 'py-2');
	});

	it('renders with shape "round"', () => {
		renderButton({ shape: 'round' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('rounded-full');
	});

	it('renders with shape "square"', () => {
		renderButton({ shape: 'square' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('w-12', 'aspect-square');
	});

	it('renders with variant "filled"', () => {
		renderButton({ variant: 'filled' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('border-transparent');
	});

	it('renders with variant "bordered"', () => {
		renderButton({ variant: 'bordered' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('border');
		expect(button).toHaveClass('text-primary');
	});

	it('renders with variant "ghost"', () => {
		renderButton({ variant: 'ghost' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('bg-transparent');
		expect(button).toHaveClass('text-primary');
	});

	it('applies the correct background color', () => {
		renderButton({ bgColor: 'secondary' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('bg-secondary');
	});

	it('applies the correct text color', () => {
		renderButton({ textColor: 'darkContent' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('text-darkContent');
	});

	it('applies the correct active state for ghost variant', () => {
		renderButton({ variant: 'ghost', bgColor: 'secondary' });

		const button = screen.getByRole('button', { name: buttonText });
		expect(button).toHaveClass('active:bg-secondary/20');
	});
});
