import { initialData } from "./data.js";

function User(username, image) {
  if (!new.target) {
    throw new Error("Use new to call the constructor object");
  }
  this.username = username;
  this.image = image;
}

export const user = (function () {
  const currentUser = initialData.currentUser;
  const activeUser = new User(currentUser.username, currentUser.image.png);
  return { activeUser };
})();
