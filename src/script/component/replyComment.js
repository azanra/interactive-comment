import dataContext from "../dataContext";
import { localData } from "../model/localStorage";
import Replies from "../model/replies";
import util from "../util/util";
import button from "./button";
import { elementUtil } from "./elementUtil";

const replyCommentAttr = {
  elementType: "div",
  elementAttribute: {
    class: "replyComment",
  },
};

const imgAttr = {
  elementType: "img",
  elementAttribute: {
    class: "profileImg",
  },
};

const replyInputAttr = {
  elementType: "textarea",
  elementAttribute: {
    class: "replyInput",
    name: "reply",
    placeholder: "Add a reply...",
  },
};

const replyBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "replyBtn",
  },
  textContent: "REPLY",
};

const replyComment = (data) => {
  const render = () => {
    const replyCommentAttrWithId = elementUtil.setUniqueId(
      replyCommentAttr,
      data,
    );
    const replyComment = elementUtil.createDom(replyCommentAttrWithId);
    replyComment.appendChild(renderProfileImg());
    replyComment.appendChild(renderReplyInput());
    replyComment.appendChild(button(data, replyBtnAttr, handleReply));
    return replyComment;
  };

  const renderProfileImg = () => {
    const profileImg = elementUtil.createDom(imgAttr);
    const imgSrc = dataContext.currentUser.image.png;
    profileImg.src = imgSrc;
    return profileImg;
  };

  const renderReplyInput = () => {
    const replyInputAttrWithId = elementUtil.setUniqueId(replyInputAttr, data);
    const replyInput = elementUtil.createDom(replyInputAttrWithId);
    return replyInput;
  };

  const handleReply = () => {
    const replyInput = document.querySelector(`#replyInput-${data.id}`);
    dataContext.lastId.incrementLastId();
    const attribute = {
      id: dataContext.lastId.getLastId(),
      content: replyInput.value,
      createdAt: new Date(),
      score: 1,
      user: dataContext.currentUser,
      replies: [],
      replyingTo: data.user.username,
      parent: data.id,
    };
    const replies = new Replies(attribute);
    dataContext.comment.addData(replies);
    dataContext.comment.addReply(data.id, replies);
    localData.storeData(dataContext.comment);
    util.updateCommentView();
    console.log(dataContext);
  };

  return render();
};

export default replyComment;
