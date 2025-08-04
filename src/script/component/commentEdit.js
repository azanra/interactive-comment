import button from "./button";
import { elementUtil } from "./elementUtil";

const commentEditAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentEdiot",
  },
};

const editCommentInputAttr = {
  elementType: "textarea",
  elementAttribute: {
    class: "editCommentInput",
  },
};

const replyBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "replyBtnAttr",
  },
  textContent: "REPLY",
};

const commentEdit = (data) => {
  const render = () => {
    const commentEdit = elementUtil.createDom(commentEditAttr);
    commentEdit.appendChild(renderEditInput());
    commentEdit.appendChild(button(data, replyBtnAttr, null));
    return commentEdit;
  };

  const renderEditInput = () => {
    const editCommentInput = elementUtil.createDom(editCommentInputAttr);
    editCommentInput.textContent = data.content;
    return editCommentInput;
  };

  return render();
};

export default commentEdit;
