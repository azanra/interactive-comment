import dataContext from "../dataContext";
import Comment from "../model/comment";
import { localData } from "../model/localStorage";
import util from "../util/util";
import button from "./button";
import { elementUtil } from "./elementUtil";

const profileImgAttr = {
  elementType: "img",
  elementAttribute: {
    class: "profileImg",
  },
};

const commentInputAttr = {
  elementType: "textarea",
  elementAttribute: {
    class: "commentInput",
    name: "comment",
    placeholder: "Add a comment...",
  },
};

const sentBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "sentBtn",
  },
  textContent: "SENT",
};

const sendComment = (function () {
  const sendComment = document.querySelector(".sendComment");

  const render = () => {
    sendComment.appendChild(renderProfileImg(dataContext.currentUser));
    sendComment.appendChild(renderCommentInput());
    sendComment.appendChild(button(null, sentBtnAttr, handleSent));
  };

  const renderProfileImg = (data) => {
    const profileImg = elementUtil.createDom(profileImgAttr);
    profileImg.src = data.image.png;
    return profileImg;
  };

  const renderCommentInput = () => {
    const commentInput = elementUtil.createDom(commentInputAttr);
    return commentInput;
  };

  const handleSent = () => {
    const commentContent = document.querySelector(".commentInput");
    dataContext.lastId.incrementLastId();
    const attribute = {
      id: dataContext.lastId.getLastId(),
      content: commentContent.value,
      createdAt: new Date(),
      score: 1,
      user: dataContext.currentUser,
      replies: [],
    };
    const commentItem = new Comment(attribute);
    dataContext.comment.addData(commentItem);
    util.updateCommentView();
    localData.storeData(dataContext.comment);
    commentContent.value = "";
    console.log(dataContext);
  };

  return { render };
})();

export default sendComment;
