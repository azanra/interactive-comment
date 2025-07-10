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

const comments = initialData.comments;

const renderData = (function () {
  const render = (dataToBeRendered) => {
    const dataToBeRenderedArray = Object.values(dataToBeRendered);
    dataToBeRenderedArray.forEach((data) => {
      if (data.type === "comment") {
        checkData(data, dataToBeRendered);
      }
    });
  };

  const checkData = (dataToCheck, dataToBeRendered) => {
    const replies = dataToCheck.replies;
    const parentComment = commentCard(commentAttr, dataToCheck);
    if (replies.length > 0) {
      replies.map((id) => {
        checkNestedData(id, parentComment, dataToBeRendered);
      });
    }
    section.appendChild(parentComment);
  };

  const checkNestedData = (id, parent, dataToBeRendered) => {
    const data = dataToBeRendered[id];
    const replies = data.replies;
    const repliesComment = commentCard(commentAttr, data);
    parent.appendChild(repliesComment);

    if (replies.length > 0) {
      replies.map((id) => {
        checkNestedData(id, repliesComment, dataToBeRendered);
      });
    }
  };

  return { render };
})();

renderData.render(comments);
