import { render, screen } from '@testing-library/react';
import Task from '../components/Task';

test('renders delete button', () => {
    const task = { "userId": 1, "id": 1, "title": "taskt title", "completed": false }
    render(<Task task={task} />);
    const linkElement = screen.getByText(/Delete/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders update button', () => {
    const task = { "userId": 1, "id": 1, "title": "taskt title", "completed": false }
    render(<Task task={task} />);
    const updateButton = screen.getByText('Update');
    expect(updateButton).toBeInTheDocument();
});


test('renders complete button', () => {
    const task = { "userId": 1, "id": 1, "title": "taskt title", "completed": false }
    render(<Task task={task} />);
    const updateButton = screen.getByText('Complete');
    expect(updateButton).toBeInTheDocument();
});

