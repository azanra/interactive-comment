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
  },
};

const sendComment = (function () {
  const sendComment = document.querySelector(".sendComment");

  const render = (data) => {
    sendComment.appendChild(renderProfileImg(data));
    sendComment.appendChild(renderCommentInput());
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

  return { render };
})();

export default sendComment;
