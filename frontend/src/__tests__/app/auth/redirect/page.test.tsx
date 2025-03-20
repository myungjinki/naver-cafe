import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RedirectPage from '@/app/auth/redirect/page';
import getAccessToken from '@/app/auth/redirect/actions';
import '@testing-library/jest-dom';

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn().mockImplementation(() => ({
    get: jest.fn().mockReturnValue('test-code')
  }))
}));

// Mock the actions module
jest.mock('@/app/auth/redirect/actions', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(undefined)
}));

describe('RedirectPage', () => {
  it('renders redirect page correctly', async () => {
    render(<RedirectPage />);
    
    // Check if the code is displayed on the page
    expect(screen.getByText(/Code: test-code/i)).toBeInTheDocument();
    
    // Wait for the useEffect to call the getAccessToken action
    await waitFor(() => {
      expect(getAccessToken).toHaveBeenCalledWith({ code: 'test-code' });
    });
  });
}); 