import { render, screen } from '@testing-library/react';
import User from '../components/User';


test('renders delete button', () => {
    const user = { "id": 1, "name": "test name", "email": "test@email.com", "phone": "111111111" }
    render(<User user={user} />);
    const linkElement = screen.getByText(/Delete/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders update button', () => {
    const user = { "id": 1, "name": "test name", "email": "test@email.com", "phone": "111111111" }
    render(<User user={user} />);
    const updateButton = screen.getByText('Update');
    expect(updateButton).toBeInTheDocument();
});

