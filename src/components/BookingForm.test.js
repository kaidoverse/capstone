import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the "Choose Date" label', () => {
    render(<BookingForm />);
    const chooseDateLabel = screen.getByLabelText("Choose Date");
    expect(chooseDateLabel).toBeInTheDocument();
});
