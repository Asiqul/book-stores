import { useContext } from 'react';
import AuthContext from '../Context/auth-provider';

function useAuth() {
    return useContext(AuthContext);
}

export default useAuth;
