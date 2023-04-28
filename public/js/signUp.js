import axios from 'axios';
import { showAlert } from './alert';
export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });
    if (response.data.status === 'Success') {
      showAlert('success', 'Sign Up is successfully');
      window.setTimeout(() => {
        location.assign('/login');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
