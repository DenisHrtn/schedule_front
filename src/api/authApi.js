import axios from 'axios';

const REGISTER_URL = 'http://localhost:8000/api/users/register/'
const CONFIRM_REGISTER_API = 'http://localhost:8000/api/users/confirmation-register/'

export const registerUser = async (email, password, password_confirmation) => {
  try {
    const response = await axios.post(REGISTER_URL,
      {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const confirmRegisterUser = async (email, code) => {
  try {
    const response = await axios.post(CONFIRM_REGISTER_API,
        {
          email: email,
          code: code
        },
    {
      headers: {
        'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};
