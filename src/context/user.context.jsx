import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener ,makeUserDocumentFromAuth} from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentuser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(null);
  const value = { currentUser, setCurrentuser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user){
        makeUserDocumentFromAuth(user);
      }
      setCurrentuser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
