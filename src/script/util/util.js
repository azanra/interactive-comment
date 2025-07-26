import dataContext from "../dataContext";
import renderData from "../view/renderData";

const util = (function () {
  const updateCommentView = () => {
    const section = document.querySelector(".section");
    section.replaceChildren();
    renderData.render(dataContext.comment.list);
  };

  const getDataId = (e) => {
    const elementId = e.target.id;
    const classAndDataId = elementId.split("-");
    return {
      id: classAndDataId[1],
    };
  };

  return { updateCommentView, getDataId };
})();

export default util;
