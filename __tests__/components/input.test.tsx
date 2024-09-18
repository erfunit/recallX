import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from '../../src/components/common/input';

describe('Input Component', () => {
	it('renders with default props', () => {
		render(<Input placeholder='Test' />);
		const inputElement = screen.getByPlaceholderText('Test');
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveClass('w-full transition-all outline-none');
		expect(inputElement).toHaveClass(
			'bg-lightContent/10 text-darkContent border-darkContent'
		);
	});

	it('applies custom variant classes', () => {
		const { rerender } = render(<Input variant='filled' placeholder='Test' />);
		const inputElement = screen.getByPlaceholderText('Test');
		expect(inputElement).toHaveClass('rounded-md');

		rerender(<Input variant='underlined' placeholder='Test' />);
		expect(inputElement).toHaveClass('border-b');

		rerender(<Input variant='outlined' placeholder='Test' />);
		expect(inputElement).toHaveClass('border rounded-md');
	});

	it('applies custom size classes', () => {
		const { rerender } = render(<Input size='small' placeholder='Test' />);
		const inputElement = screen.getByPlaceholderText('Test');
		expect(inputElement).toHaveClass('px-3 py-1 text-sm');

		rerender(<Input size='medium' placeholder='Test' />);
		expect(inputElement).toHaveClass('px-4 py-2 text-base');

		rerender(<Input size='large' placeholder='Test' />);
		expect(inputElement).toHaveClass('px-5 py-3 text-lg');
	});

	it('applies custom background and text color', () => {
		const { rerender } = render(
			<Input bgColor='primary' textColor='secondary' placeholder='Test' />
		);
		const inputElement = screen.getByPlaceholderText('Test');
		expect(inputElement).toHaveClass(
			'bg-primary/10 text-secondary border-secondary'
		);

		rerender(
			<Input
				bgColor='darkContent'
				textColor='lightContent'
				placeholder='Test'
			/>
		);
		expect(inputElement).toHaveClass(
			'bg-darkContent/10 text-lightContent border-lightContent'
		);
	});

	it('renders left icon', () => {
		render(
			<Input
				leftIcon={
					<span
						data-testid='left-icon'
						className='absolute top-1/2 transform -translate-y-1/2 text-darkContent'
					>
						Left
					</span>
				}
				placeholder='Test'
			/>
		);
		const leftIcon = screen.getByTestId('left-icon');
		expect(leftIcon).toBeInTheDocument();
		expect(leftIcon).toHaveClass(
			'absolute top-1/2 transform -translate-y-1/2 text-darkContent'
		);
	});

	it('renders right icon', () => {
		render(
			<Input
				rightIcon={
					<span
						data-testid='right-icon'
						className='absolute top-1/2 transform -translate-y-1/2 text-darkContent'
					>
						Right
					</span>
				}
				placeholder='Test'
			/>
		);
		const rightIcon = screen.getByTestId('right-icon');
		expect(rightIcon).toBeInTheDocument();
		expect(rightIcon).toHaveClass(
			'absolute top-1/2 transform -translate-y-1/2 text-darkContent'
		);
	});
});
