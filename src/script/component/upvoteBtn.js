import button from "./button";

export const increBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "increBtn",
  },
  textContent: "+",
};

export const decreBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "decreBtn",
  },
  textContent: "-",
};

const upvoteBtn = (btnAttr, data, onClick) => {
  const renderBtn = () => {
    const buttonElement = button(data, btnAttr, onClick);
    return buttonElement;
  };

  return renderBtn();
};

export default upvoteBtn;
