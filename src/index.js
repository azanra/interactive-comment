import "./style.css";
import { card } from "./script/view/card.js";
import { data } from "./script/mainData.js";
import { renderAction } from "./script/view/renderAction.js";
import commentCard, { commentAttr } from "./script/component/commentCard.js";
import { initialData } from "./script/model/data.js";

// card.renderCard(data.list);
// renderAction.renderDom(data.list[5]);
// card.replyInputDom(activeUser, data.list[[2]]);

const section = document.querySelector(".section");

const initialDatas = initialData.comments;
initialDatas.forEach((data) => {
  section.appendChild(commentCard(commentAttr, data));
});
