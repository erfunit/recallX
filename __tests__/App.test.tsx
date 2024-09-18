import React from 'react';
import { render } from '@testing-library/react';
import AppComponent from '../src/App';

test('Renders the app component without crashing', () => {
	expect(render(<AppComponent />)).toBeTruthy();
});
