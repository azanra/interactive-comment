import { elementUtil } from "./elementUtil";

const button = (data = null, attribute, onClick = null, children = null) => {
  const renderButton = () => {
    const btnAttr = elementUtil.setUniqueId(attribute, data);
    const button = elementUtil.createDom(btnAttr);
    onClick && button.addEventListener("click", onClick);
    children && button.appendChild(children);

    return button;
  };

  return renderButton();
};

export default button;
