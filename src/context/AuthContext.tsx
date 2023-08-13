import React, { PropsWithChildren } from 'react';
import { Auth, onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

export interface AuthContextModel {
    auth: Auth
    user: User | null
}

export const AuthContext = React.createContext<AuthContextModel>(
    {} as AuthContextModel,
)

export function useAuthContext(): AuthContextModel {
    return React.useContext(AuthContext)
}

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};
