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

const upvote = (upvoteAttr) => {
  const { amount, container } = upvoteAttr;
  const renderAmount = () => {
    const amountElement = elementUtil.createDom(amount);
    return amountElement;
  };

  const renderContainer = () => {
    const containerElement = elementUtil.createDom(container);
    containerElement.appendChild(upvoteBtn(increBtnAttr));
    containerElement.appendChild(renderAmount());
    containerElement.appendChild(upvoteBtn(decreBtnAttr));
    return containerElement;
  };

  return renderContainer();
};

export default upvote;
