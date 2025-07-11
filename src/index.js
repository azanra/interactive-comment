import "./style.css";
import { data } from "./script/mainData.js";
import { renderAction } from "./script/view/renderAction.js";
import commentCard, { commentAttr } from "./script/component/commentCard.js";
import { initialData } from "./script/model/data.js";
import renderData from "./script/renderData.js";

// card.renderCard(data.list);
// renderAction.renderDom(data.list[5]);
// card.replyInputDom(activeUser, data.list[[2]]);

const comments = initialData.comments;
renderData.render(comments);
