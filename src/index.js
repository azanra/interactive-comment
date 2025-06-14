import "./style.css";
import { localData } from "./script/model/localStorage.js";
import { card } from "./script/view/card.js";
import { user } from "./script/model/user.js";

const activeUser = user.activeUser;
const data = localData.loadData();
console.log("local storage", data);

card.renderCard(data.list);

// card.replyInputDom(activeUser, data.list[[2]]);
