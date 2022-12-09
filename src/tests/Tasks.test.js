import { render, screen } from '@testing-library/react';
import Tasks from '../components/Tasks';

test('renders actions label', () => {
    render(<Tasks />);
    const linkElement = screen.getByText('ACTIONS');
    expect(linkElement).toBeInTheDocument();
});

