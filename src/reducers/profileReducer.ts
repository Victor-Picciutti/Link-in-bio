import type { ProfileState, ProfileAction } from "../types/ProfileReducer";

export function profileReducer(
  state: ProfileState,
  action: ProfileAction,
): ProfileState {
  switch (action.type) {
    case "SET_GITHUB_USER":
      return { ...state, githubUser: action.payload };
    case "SET_SHOW_FOLLOWERS":
      return { ...state, showFollowers: action.payload };
    case "SET_SHOW_REPOSITORIES":
      return { ...state, showRepositories: action.payload };
    case "SET_SOCIAL_LINK":
      return {
        ...state,
        socialLinks: {
          ...state.socialLinks,
          [action.payload.key]: action.payload.value,
        },
      };
    case "ADD_CUSTOM_LINK":
      return {
        ...state,
        customLinks: [
          ...state.customLinks,
          { id: crypto.randomUUID(), title: "", url: "" },
        ],
      };
    case "REMOVE_CUSTOM_LINK":
      return {
        ...state,
        customLinks: state.customLinks.filter(
          (link) => link.id !== action.payload,
        ),
      };
    case "UPDATE_CUSTOM_LINK":
      return {
        ...state,
        customLinks: state.customLinks.map((link) =>
          link.id === action.payload.id
            ? { ...link, [action.payload.field]: action.payload.value }
            : link,
        ),
      };
  }
}
