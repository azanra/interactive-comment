import dataContext from "../dataContext";
import renderData from "../view/renderData";

const util = (function () {
  const updateCommentView = () => {
    const section = document.querySelector(".section");
    section.replaceChildren();
    renderData.render(dataContext.comment.list);
  };

  return { updateCommentView };
})();

export default util;
