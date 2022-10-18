import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../store/index';
const Header = () => {
  const logout = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth);
    const onLogoutHandler = () => {
      logout(authActions.logout());
    }
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuth && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={onLogoutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
