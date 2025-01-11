import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  const mockPaginate = jest.fn();

  beforeEach(() => {
    mockPaginate.mockClear();
  });

  it('renders pagination buttons correctly', () => {
    render(
      <Pagination
        totalProjects={20}
        projectsPerPage={5}
        paginate={mockPaginate}
        currentPage={1}
      />
    );

    // Here i am checking if Prev and Next buttns are present or not.
    expect(screen.getByText(/< Prev/i)).toBeInTheDocument();
    expect(screen.getByText(/Next >/i)).toBeInTheDocument();
  });

  it('disables the Prev button on the first page', () => {
    render(
      <Pagination
        totalProjects={20}
        projectsPerPage={5}
        paginate={mockPaginate}
        currentPage={1}
      />
    );

    const prevButton = screen.getByText(/< Prev/i);
    expect(prevButton).toBeDisabled();
  });

  it('disables the Next button on the last page', () => {
    render(
      <Pagination
        totalProjects={20}
        projectsPerPage={5}
        paginate={mockPaginate}
        currentPage={4} // Last page for 20 rows with 5 per page.
      />
    );

    const nextButton = screen.getByText(/Next >/i);
    expect(nextButton).toBeDisabled();
  });

  it('disables both buttons when there are no projects', () => {
    render(
      <Pagination
        totalProjects={0}
        projectsPerPage={5}
        paginate={mockPaginate}
        currentPage={1}
      />
    );

    const prevButton = screen.getByText(/< Prev/i);
    const nextButton = screen.getByText(/Next >/i);

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it('calls the paginate function when clicking Next on a middle page', () => {
    render(
      <Pagination
        totalProjects={20}
        projectsPerPage={5}
        paginate={mockPaginate}
        currentPage={2} 
      />
    );

    const nextButton = screen.getByText(/Next >/i);
    fireEvent.click(nextButton);

    expect(mockPaginate).toHaveBeenCalledTimes(1);
    expect(mockPaginate).toHaveBeenCalledWith(3); 
  });

  it('calls the paginate function when clicking Prev on a middle page', () => {
    render(
      <Pagination
        totalProjects={20}
        projectsPerPage={5}
        paginate={mockPaginate}
        currentPage={2} 
      />
    );

    const prevButton = screen.getByText(/< Prev/i);
    fireEvent.click(prevButton);

    expect(mockPaginate).toHaveBeenCalledTimes(1);
    expect(mockPaginate).toHaveBeenCalledWith(1); 
  });
});
