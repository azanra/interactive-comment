import dataContext from "../dataContext";
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
    const replyComment = elementUtil.createDom(replyCommentAttr);
    replyComment.appendChild(renderProfileImg());
    replyComment.appendChild(renderReplyInput());
    replyComment.appendChild(button(data, replyBtnAttr, null));
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

  return render();
};

export default replyComment;
