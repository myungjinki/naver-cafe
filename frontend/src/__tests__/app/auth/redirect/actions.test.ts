import getAccessToken from '@/app/auth/redirect/actions';

// Mock global fetch
global.fetch = jest.fn();

describe('getAccessToken', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    console.log = jest.fn(); // Mock console.log
  });

  it('should call fetch with the correct URL and parameters', async () => {
    // Mock fetch response
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ 
        access_token: 'mock-access-token',
        refresh_token: 'mock-refresh-token',
        token_type: 'bearer'
      })
    });

    // Call the function
    await getAccessToken({ code: 'test-code' });

    // Check that fetch was called correctly
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://nid.naver.com/oauth2.0/token')
    );
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('grant_type=authorization_code')
    );
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('client_id=')
    );
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('client_secret=')
    );
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('code=test-code')
    );

    // Check that console.log was called with the response data
    expect(console.log).toHaveBeenCalledWith({
      access_token: 'mock-access-token',
      refresh_token: 'mock-refresh-token',
      token_type: 'bearer'
    });
  });

  it('should handle fetch errors gracefully', async () => {
    // Mock fetch to throw an error
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));
    
    // Spy on console.error
    console.error = jest.fn();
    
    // Call the function and expect it not to throw
    await expect(getAccessToken({ code: 'test-code' })).resolves.not.toThrow();
    
    // Check that error was logged
    expect(console.error).toHaveBeenCalled();
  });
}); 