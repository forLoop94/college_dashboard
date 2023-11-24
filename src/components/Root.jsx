import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../redux/user/userSlice';
import { NavPanel } from './NavPanel';

export const Root = () => {
  const { role, profile_exists } = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(getCurrentUser());
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate, dispatch]);

  if (!profile_exists && !role) {
    return null;
  }

  const addProfilePath = `/add_${role.toLowerCase()}`;

  if (!profile_exists) {
    navigate(addProfilePath);
    return null;
  }

  return (
    <div id="root">
      <NavPanel />
      <div id="pages-content">
        <Outlet />
      </div>
    </div>
  );
}

