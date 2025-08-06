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

const editCommentContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "editCommentContainer",
  },
};

const editCommentInputAttr = {
  elementType: "textarea",
  elementAttribute: {
    class: "editCommentInput",
  },
};

const replyBtnContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "replyBtnContainer",
  },
};

const updateBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "updateBtn",
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
    commentEdit.appendChild(renderEditBtn());
    return commentEdit;
  };

  const renderEditBtn = () => {
    const replyBtnContainer = elementUtil.createDom(replyBtnContainerAttr);
    replyBtnContainer.appendChild(button(data, updateBtnAttr, handleEdit));
    return replyBtnContainer;
  };

  const renderEditInput = () => {
    const editCommentContainer = elementUtil.createDom(
      editCommentContainerAttr,
    );
    const editCommentInputWithId = elementUtil.setUniqueId(
      editCommentInputAttr,
      data,
    );
    const editCommentInput = elementUtil.createDom(editCommentInputWithId);
    editCommentInput.textContent = data.content;
    editCommentContainer.appendChild(editCommentInput);
    return editCommentContainer;
  };

  return render();
};

export default commentEdit;
