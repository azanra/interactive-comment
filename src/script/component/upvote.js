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

const upvote = (upvoteAttr, data) => {
  const { amount, container } = upvoteAttr;
  const { id, score } = data;

  const renderAmount = () => {
    const amountAttribute = elementUtil.setUniqueId(amount, id);
    const amountElement = elementUtil.createDom(amountAttribute);
    elementUtil.setTextContent(amountElement, score);
    return amountElement;
  };

  const renderContainer = () => {
    const containerElement = elementUtil.createDom(container);
    containerElement.appendChild(upvoteBtn(increBtnAttr, data));
    containerElement.appendChild(renderAmount());
    containerElement.appendChild(upvoteBtn(decreBtnAttr, data));
    return containerElement;
  };

  return renderContainer();
};

export default upvote;
