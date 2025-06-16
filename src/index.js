import "./style.css";
import { card } from "./script/view/card.js";
import { data } from "./script/mainData.js";
import { renderAction } from "./script/view/renderAction.js";

card.renderCard(data.list);
renderAction.renderDom(data.list[5]);
// card.replyInputDom(activeUser, data.list[[2]]);
