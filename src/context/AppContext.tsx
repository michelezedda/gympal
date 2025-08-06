import { createContext, useContext, useState, type ReactNode } from "react";
import type { AppContextType, Plan } from "../types/types.tsx";

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedPlan, setSelectedPlan] = useState<Plan>();
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

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
