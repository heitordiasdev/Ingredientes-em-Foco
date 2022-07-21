import { useContext } from 'react';
import { Home} from '../pages';
import { AuthContext} from './AuthContext';

export const RequireAuth = ({ children }) => {
    const auth = useContext(AuthContext);
    
    if (!auth.user.id) {
        return <Home />;
    }

    return children;
}