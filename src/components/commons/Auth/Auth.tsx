import { createContext, useState, useEffect, useContext } from 'react';
import { firebaseClient, loginWithEmailAndPassword, logout as firebaseLogout } from 'src/lib/firebase/client';
import nookies from 'nookies';
import { useRouter } from 'next/router';

type AuthContext = {
  operator: firebaseClient.User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
};

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const authContext = useAuthProvider();
  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

const useAuthProvider = () => {
  const [operator, setOperator] = useState<firebaseClient.User | null>(null);
  const router = useRouter();

  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged(async (operator) => {
      if (!operator) {
        setOperator(null);
        nookies.set(undefined, 'token', '', {});
        return;
      }
      const token = await operator.getIdToken();
      setOperator(operator);
      nookies.set(undefined, 'token', token, {});
    });
  }, []);

  const login = async (email: string, password: string) => {
    const loginSucceeded = await loginWithEmailAndPassword(email, password);
    if (loginSucceeded) {
      router.push('/');
    }

    return loginSucceeded;
  };

  const logout = async () => {
    const logoutSucceeded = await firebaseLogout();
    if (logoutSucceeded) {
      router.push('/login');
    }

    return logoutSucceeded;
  };

  return {
    operator,
    login,
    logout,
  };
};
