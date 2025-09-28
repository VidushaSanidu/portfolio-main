import { useCallback, useEffect, useState } from "react";
import { getLatestCV } from "../utils/api";

export function useCV() {
  const [state, setState] = useState({
    cvUrl: "#",
    isLoading: true,
    error: null,
  });

  const fetchCV = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const url = await getLatestCV();
      setState({ cvUrl: url, isLoading: false, error: null });
    } catch (error) {
      setState((prev) => ({
        cvUrl: prev.cvUrl,
        isLoading: false,
        error: error.message,
      }));
    }
  }, []);

  useEffect(() => {
    fetchCV();
  }, [fetchCV]);

  return {
    ...state,
    retry: fetchCV,
  };
}