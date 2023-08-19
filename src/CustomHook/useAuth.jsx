// useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem('token');

  useEffect(() => {
    if (!storedToken) {
      navigate('/authentication/login');
    }
  }, [navigate, storedToken]);

  return !!storedToken;
};

export default useAuth;
