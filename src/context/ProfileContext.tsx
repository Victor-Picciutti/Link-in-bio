import { createContext } from "react";
import type { ReactNode } from "react";
import type { SocialLinks } from "../types/SocialMedia";
import type { GithubUser } from "../types/GithubUser";
import type { CustomLink } from "../types/CustomLink";
import { useProfileReducer } from "../hooks/useProfileReducer";

export type ProfileContextType = {
  githubUser: GithubUser | null;
  setGithubUser: (user: GithubUser | null) => void;
  showFollowers: boolean;
  setShowFollowers: (value: boolean) => void;
  showRepositories: boolean;
  setShowRepositories: (value: boolean) => void;
  socialLinks: SocialLinks;
  setSocialLink: (key: keyof SocialLinks, value: string) => void;
  customLinks: CustomLink[];
  addCustomLink: () => void;
  removeCustomLink: (id: string) => void;
  updateCustomLink: (id: string, field: "title" | "url", value: string) => void;
};

export const ProfileContext = createContext<ProfileContextType | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useProfileReducer();

  return (
    <ProfileContext.Provider
      value={{
        githubUser: state.githubUser,
        setGithubUser: (user) =>
          dispatch({ type: "SET_GITHUB_USER", payload: user }),
        showFollowers: state.showFollowers,
        setShowFollowers: (value) =>
          dispatch({ type: "SET_SHOW_FOLLOWERS", payload: value }),
        showRepositories: state.showRepositories,
        setShowRepositories: (value) =>
          dispatch({ type: "SET_SHOW_REPOSITORIES", payload: value }),
        socialLinks: state.socialLinks,
        setSocialLink: (key, value) =>
          dispatch({ type: "SET_SOCIAL_LINK", payload: { key, value } }),
        customLinks: state.customLinks,
        addCustomLink: () => dispatch({ type: "ADD_CUSTOM_LINK" }),
        removeCustomLink: (id) =>
          dispatch({ type: "REMOVE_CUSTOM_LINK", payload: id }),
        updateCustomLink: (id, field, value) =>
          dispatch({
            type: "UPDATE_CUSTOM_LINK",
            payload: { id, field, value },
          }),
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
