import type { GithubUser } from "./GithubUser";
import type { CustomLink } from "./CustomLink";
import type { SocialLinks } from "./SocialMedia";

export type ProfileState = {
  githubUser: GithubUser | null;
  showFollowers: boolean;
  showRepositories: boolean;
  socialLinks: SocialLinks;
  customLinks: CustomLink[];
};

export type ProfileAction =
  | { type: "SET_GITHUB_USER"; payload: GithubUser | null }
  | { type: "SET_SHOW_FOLLOWERS"; payload: boolean }
  | { type: "SET_SHOW_REPOSITORIES"; payload: boolean }
  | {
      type: "SET_SOCIAL_LINK";
      payload: { key: keyof SocialLinks; value: string };
    }
  | { type: "ADD_CUSTOM_LINK" }
  | { type: "REMOVE_CUSTOM_LINK"; payload: string }
  | {
      type: "UPDATE_CUSTOM_LINK";
      payload: { id: string; field: "title" | "url"; value: string };
    };
