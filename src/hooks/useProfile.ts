import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import type { ProfileContextType } from "../context/ProfileContext";

export function useProfile(): ProfileContextType {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile deve ser usado dentro de ProfileProvider");
  }
  return context;
}
