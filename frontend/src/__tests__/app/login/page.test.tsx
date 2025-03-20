import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '@/app/login/page';
import '@testing-library/jest-dom';

// Mock the process.env for the test
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('LoginPage', () => {
  it('renders login page correctly', () => {
    render(<LoginPage />);
    
    // Check for title and description
    expect(screen.getByText(/네이버 카페 자동 글 올리기/i)).toBeInTheDocument();
    expect(screen.getByText(/로그인하여 시작하세요/i)).toBeInTheDocument();
    
    // Check for form elements
    expect(screen.getByLabelText(/username:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password:/i)).toBeInTheDocument();
    
    // Check for login button
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    
    // Check for the Naver login image
    const naverImage = screen.getByAltText(/naver logo/i);
    expect(naverImage).toBeInTheDocument();
    
    // Check that the Naver login URL contains environment variables
    const naverLink = naverImage.closest('a');
    expect(naverLink).toHaveAttribute('href', expect.stringContaining('client_id='));
    expect(naverLink).toHaveAttribute('href', expect.stringContaining('redirect_uri='));
  });
}); 