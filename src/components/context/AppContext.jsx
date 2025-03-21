import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <AppContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
