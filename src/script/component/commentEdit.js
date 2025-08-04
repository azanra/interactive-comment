import dataContext from "../dataContext";
import { localData } from "../model/localStorage";
import util from "../util/util";
import button from "./button";
import { elementUtil } from "./elementUtil";

const commentEditAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentEdit",
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
  textContent: "UPDATE",
};

const commentEdit = (data) => {
  const handleEdit = (e) => {
    const { id } = util.getDataId(e);
    const editInput = document.querySelector(`#editCommentInput-${id}`);
    const input = editInput.value;
    dataContext.comment.updateAttribute(id, "content", input);
    localData.storeData(dataContext.comment);
    util.updateCommentView();
    console.log(dataContext);
  };

  const render = () => {
    const commentEdit = elementUtil.createDom(commentEditAttr);
    commentEdit.appendChild(renderEditInput());
    commentEdit.appendChild(button(data, replyBtnAttr, handleEdit));
    return commentEdit;
  };

  const renderEditInput = () => {
    const editCommentInputWithId = elementUtil.setUniqueId(
      editCommentInputAttr,
      data,
    );
    const editCommentInput = elementUtil.createDom(editCommentInputWithId);
    editCommentInput.textContent = data.content;
    return editCommentInput;
  };

  return render();
};

export default commentEdit;
