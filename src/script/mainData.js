import { localData } from "./model/localStorage.js";
import { user } from "./model/user.js";
import { renderAction } from "./view/renderAction.js";

export const activeUser = user.activeUser;
export const data = localData.loadData();
console.log("local storage", data);

renderAction.getActiveUserListData();
