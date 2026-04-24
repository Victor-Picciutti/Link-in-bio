import type { GithubUser } from "../types/GithubUser";

export async function getGithubUser(username: string): Promise<GithubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("Usuário não encontrado");
  }

  const data = await response.json();

  return {
    name: data.name ?? data.login,
    login: data.login,
    avatar_url: data.avatar_url,
    followers: data.followers,
    public_repos: data.public_repos,
  };
}
