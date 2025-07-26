import dataContext from "../dataContext";
import util from "../util/util";
import { elementUtil } from "./elementUtil";
import upvoteBtn, { decreBtnAttr, increBtnAttr } from "./upvoteBtn";

export const upvoteAttr = {
  container: {
    elementType: "div",
    elementAttribute: {
      class: "amountContainer",
    },
  },
  amount: {
    elementType: "p",
    elementAttribute: {
      class: "amountText",
    },
  },
};

const upvote = (data) => {
  const { amount, container } = upvoteAttr;
  const { score, isUpvoted } = data;

  const handeUpvote = (e) => {
    if (!isUpvoted) {
      upvoteEvent(e);
    }
  };

  const upvoteEvent = (e) => {
    const { id } = util.getDataId(e);
    dataContext.comment.setUpvote(id);
    dataContext.comment.setScore(id);
    updateAmountText(id);
    console.log(dataContext);
  };

  const updateAmountText = (id) => {
    const data = dataContext.comment.returnComment(id);
    const amountText = document.querySelector(`#amountText-${id}`);
    amountText.textContent = data.score;
  };

  const renderAmount = () => {
    const amountAttribute = elementUtil.setUniqueId(amount, data);
    const amountElement = elementUtil.createDom(amountAttribute);
    elementUtil.setTextContent(amountElement, score);
    return amountElement;
  };

  const renderContainer = () => {
    const containerElement = elementUtil.createDom(container);
    containerElement.appendChild(upvoteBtn(increBtnAttr, data, handeUpvote));
    containerElement.appendChild(renderAmount());
    containerElement.appendChild(upvoteBtn(decreBtnAttr, data));
    return containerElement;
  };

  return renderContainer();
};

export default upvote;
