import { useContext } from 'react';
import { HomeAdmin } from '../pages';
import Login from '../pages/Login';
import { AuthContext} from './AuthContext';

export const RequireAuth = ({ children }) => {
    const auth = useContext(AuthContext);
    if (auth.user.name === 'admin') {
        return <HomeAdmin />;
    }
    else if (!auth.user.id) {
        return <Login />;
    }

    return children;
}