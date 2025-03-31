import { useState, useCallback } from "react";

export default function usePersistedState(stateKey, initialState) {
  const [state, setState] = useState(() => {
    try {
      const persistedState = localStorage.getItem(stateKey);
      if (!persistedState) {
        return typeof initialState === "function"
          ? initialState()
          : initialState;
      }
      return JSON.parse(persistedState);
    } catch (error) {
      console.error(
        `Error loading persisted state for key "${stateKey}":`,
        error
      );
      return typeof initialState === "function" ? initialState() : initialState;
    }
  });

  const setPersistedState = useCallback(
    (input) => {
      try {
        const data = typeof input === "function" ? input(state) : input;
        localStorage.setItem(stateKey, JSON.stringify(data));
        setState(data);
      } catch (error) {
        console.error(
          `Error saving state to localStorage for key "${stateKey}":`,
          error
        );
      }
    },
    [state, stateKey]
  );

  return [state, setPersistedState];
}
