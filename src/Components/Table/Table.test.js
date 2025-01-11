import { render, screen } from '@testing-library/react';
import Table from './Table';  

describe('Table Component', () => {
  it('renders table with data correctly', () => {
    const mockProjects = [
      {
        "s.no": 1,
        "amt.pledged": 15823,
        "percentage.funded": 186,
        title: "Catalysts, Explorers & Secret Keepers: Women of SF",
      },
      {
        "s.no": 2,
        "amt.pledged": 6859,
        "percentage.funded": 8,
        title: "The Whatamagump (a hand-crafted story picture book)",
      },
    ]; 

    render(<Table projects={mockProjects} />); 

    // Checking ki if headers are rendered
    expect(screen.getByText(/S.No./i)).toBeInTheDocument();
    expect(screen.getByText(/Percentage Funded/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount Pledged/i)).toBeInTheDocument();

    // Checking if data is rendered in the table
    expect(screen.getByText(/Catalysts, Explorers & Secret Keepers: Women of SF/i)).toBeInTheDocument();
    expect(screen.getByText('$15,823')).toBeInTheDocument();
  });
});
