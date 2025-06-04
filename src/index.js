import "./style.css";
import { localData } from "./script/model/localStorage.js";
import { card } from "./script/view/card.js";

const data = localData.loadData();
console.log("local storage", data);

card.renderCard(data.list);
