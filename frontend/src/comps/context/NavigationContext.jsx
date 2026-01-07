import { createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

const NavigationContext = createContext();

const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within NavigationProvider');
  return context;
};

const NavigationProvider = ({ children }) => {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <NavigationContext.Provider value={{ navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider, useNavigation };