import commentCard, { commentAttr } from "../component/commentCard";

const renderData = (function () {
  const section = document.querySelector(".section");

  const render = (dataToBeRendered) => {
    const dataToBeRenderedArray = Object.values(dataToBeRendered);
    dataToBeRenderedArray.forEach((data) => {
      if (data.type === "comment") {
        checkData(data, dataToBeRendered);
      }
    });
  };

  const checkData = (dataToCheck, dataToBeRendered) => {
    const replies = dataToCheck.replies;
    const parentComment = commentCard(commentAttr, dataToCheck);
    if (replies.length > 0) {
      replies.map((id) => {
        checkNestedData(id, parentComment, dataToBeRendered);
      });
    }
    section.appendChild(parentComment);
  };

  const checkNestedData = (id, parent, dataToBeRendered) => {
    const data = dataToBeRendered[id];
    const replies = data.replies;
    const repliesComment = commentCard(commentAttr, data);
    parent.appendChild(repliesComment);

    if (replies.length > 0) {
      replies.map((id) => {
        checkNestedData(id, repliesComment, dataToBeRendered);
      });
    }
  };

  return { render };
})();

export default renderData;
