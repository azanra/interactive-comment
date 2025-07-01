import "./style.css";
import { card } from "./script/view/card.js";
import { data } from "./script/mainData.js";
import { renderAction } from "./script/view/renderAction.js";
import commentCard, { commentAttr } from "./script/component/commentCard.js";

// card.renderCard(data.list);
// renderAction.renderDom(data.list[5]);
// card.replyInputDom(activeUser, data.list[[2]]);

const section = document.querySelector(".section");
section.appendChild(commentCard(commentAttr, 1));
section.appendChild(commentCard(commentAttr, 2));
section.appendChild(commentCard(commentAttr, 3));
