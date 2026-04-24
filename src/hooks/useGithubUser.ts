import { useCallback, useState } from "react";
import { useProfile } from "../hooks/useProfile";
import { getGithubUser } from "../services/github";

export function useGithubUser() {
  const { setGithubUser } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(
    async (username: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const user = await getGithubUser(username);
        setGithubUser(user);
      } catch {
        setError("Usuário não encontrado");
        setGithubUser(null);
      } finally {
        setIsLoading(false);
      }
    },
    [setGithubUser],
  );

  return { fetchUser, isLoading, error };
}
