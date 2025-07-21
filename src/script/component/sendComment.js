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

const sendComment = (function () {
  const sendComment = document.querySelector(".sendComment");

  const render = (data) => {
    sendComment.appendChild(renderProfileImg(data));
    sendComment.appendChild(renderCommentInput());
    sendComment.appendChild(button("sent"));
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
