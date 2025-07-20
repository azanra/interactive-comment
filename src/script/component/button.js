import { elementUtil } from "./elementUtil";

const buttonAttr = {
  elementType: "button",
  elementAttribute: {
    class: "button",
  },
};

const button = (text) => {
  const renderButton = () => {
    const btnAttr = elementUtil.setUniqueId(buttonAttr, text);
    const button = elementUtil.createDom(btnAttr);
    button.textContent = text.toUpperCase();
    return button;
  };

  return renderButton();
};

export default button;
