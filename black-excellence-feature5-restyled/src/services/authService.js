import Parse from "parse";

// ------------------------------
// Student B - Parse Auth Service
// ------------------------------

export async function registerUser({ firstName, lastName, email, password }) {
  const user = new Parse.User();

  user.set("username", email);
  user.set("email", email);
  user.set("password", password);
  user.set("firstName", firstName);
  user.set("lastName", lastName);

  const createdUser = await user.signUp();
  return createdUser;
}

export async function loginUser({ email, password }) {
  const loggedInUser = await Parse.User.logIn(email, password);
  return loggedInUser;
}

export async function logoutUser() {
  await Parse.User.logOut();
}

export function getCurrentUser() {
  return Parse.User.current();
}

export function isAuthenticated() {
  return !!Parse.User.current();
}
