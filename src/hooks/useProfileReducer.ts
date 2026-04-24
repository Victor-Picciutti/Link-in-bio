import { useReducer } from "react";
import { profileReducer } from "../reducers/profileReducer";
import type { ProfileState, ProfileAction } from "../types/ProfileReducer";

const initialState: ProfileState = {
  githubUser: null,
  showFollowers: false,
  showRepositories: false,
  socialLinks: { instagram: "", youtube: "", linkedin: "", x: "" },
  customLinks: [],
};

export function useProfileReducer(): [
  ProfileState,
  React.Dispatch<ProfileAction>,
] {
  return useReducer(profileReducer, initialState);
}
