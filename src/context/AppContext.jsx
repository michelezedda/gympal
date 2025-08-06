import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AppContext.Provider
      value={{
        selectedPlan,
        setSelectedPlan,
        scrollToTop,
        isContactFormOpen,
        setIsContactFormOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
