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
  const { score } = data;

  const handleUpvote = (e) => {
    const { id } = util.getDataId(e);
    dataContext.comment.setUpvote(id);
    dataContext.comment.setUpvoteScore(id);
    updateAmountText(id);
    console.log(dataContext);
  };

  const handleDownvote = (e) => {
    const { id } = util.getDataId(e);
    dataContext.comment.setDownvote(id);
    dataContext.comment.setDownvoteScore(id);
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
    amountElement.textContent = data.isDeleted ? " " : score;
    return amountElement;
  };

  const renderContainer = () => {
    const containerElement = elementUtil.createDom(container);
    containerElement.appendChild(upvoteBtn(increBtnAttr, data, handleUpvote));
    containerElement.appendChild(renderAmount());
    containerElement.appendChild(upvoteBtn(decreBtnAttr, data, handleDownvote));
    return containerElement;
  };

  return renderContainer();
};

export default upvote;
