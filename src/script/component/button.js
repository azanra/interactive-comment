import { elementUtil } from "./elementUtil";

const buttonAttr = {
  elementType: "button",
  elementAttribute: {
    class: "button",
  },
};

const button = (text, onClick) => {
  const renderButton = () => {
    const btnAttr = elementUtil.setUniqueId(buttonAttr, text);
    const button = elementUtil.createDom(btnAttr);
    button.textContent = text.toUpperCase();
    button.addEventListener("click", onClick);
    return button;
  };

  return renderButton();
};

export default button;
