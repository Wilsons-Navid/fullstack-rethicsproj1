import axios from 'axios';

const AUTH_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/auth`;

//fUNCTION TO LOGIN -TAKE NOTE OF THIS WILSONS
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL}/login`, {
      email,
      password,
    });
    const { token, user } = response.data;

    // Store the token in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};


// Signup function
export const signup = async (name, email, password, role) => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL}/signup`, {
      name,
      email,
      password,
      role, // Include role in the request payload
    });
    const { token, user } = response.data;

    // Store the token and user data in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};
// singremember

// Function to log out a user
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Function to check if a user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
};

// Function to get the current user
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Function to refresh the authentication token
export const refreshToken = async () => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL}/refresh-token`, {
      token: localStorage.getItem('token'),
    });
    const { token } = response.data;

    // Update the token in localStorage
    localStorage.setItem('token', token);

    return token;
  } catch (error) {
    console.error('Token refresh failed:', error);
    throw error;
  }
};