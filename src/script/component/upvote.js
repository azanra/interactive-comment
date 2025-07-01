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

const upvote = (upvoteAttr, id) => {
  const { amount, container } = upvoteAttr;

  const renderAmount = () => {
    const amountAttribute = elementUtil.setUniqueId(amount, id);
    const amountElement = elementUtil.createDom(amountAttribute);
    return amountElement;
  };

  const renderContainer = () => {
    const containerElement = elementUtil.createDom(container);
    containerElement.appendChild(upvoteBtn(increBtnAttr, id));
    containerElement.appendChild(renderAmount());
    containerElement.appendChild(upvoteBtn(decreBtnAttr, id));
    return containerElement;
  };

  return renderContainer();
};

export default upvote;
