const ROOT_URL =
  'https://mighty-oasis-08080.herokuapp.com/api/';

const articlesURL = ROOT_URL + 'articles';
const tagsURL = ROOT_URL + 'tags';
const signupURL = ROOT_URL + 'users';
const loginURL = ROOT_URL + 'users/login';
const userVerifyURL = ROOT_URL + 'user';
const userProfile = ROOT_URL + 'profiles';

const localStorageKey = 'app__user';

export {
  ROOT_URL,
  articlesURL,
  tagsURL,
  signupURL,
  loginURL,
  localStorageKey,
  userVerifyURL,
  userProfile,
};
