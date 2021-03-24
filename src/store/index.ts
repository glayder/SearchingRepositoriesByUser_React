import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [],
  repository: [],
  user: [],
};

interface Type {
  type: string;
  repository: Repositories;
  user: User;
}

export interface Repositories {
  id: number;
  full_name: string;
  created_at: string;
  description: string;
  language: string;
}

export interface User {
  public_repos: string;
  followers: string;
  following: string;
  blog: string;
  name: string;
  bio: string;
  twitter_username: string;
  company: string;
  public_gists: string;
  avatar_url: string;
}

export interface State {
  data: string[];
}

function courses(state: State = INITIAL_STATE, action: Type) {
  switch (action.type) {
    case 'ADD_REPOSITORY':
      return { ...state, repository: action.repository };
    case 'ADD_USER':
      return { ...state, user: action.user };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
