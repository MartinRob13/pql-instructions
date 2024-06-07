import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App.jsx';

describe('App tests', () => {
    it('should contains the main hero banner', () => {
    render(<App />);
        const heading = screen.getByText(/Welcome to the Official Page of the Premier Quidditch League/i);
        expect(heading).toBeInTheDocument()
    });
});