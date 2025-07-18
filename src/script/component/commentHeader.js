import { initialData } from "../model/data";
import { elementUtil } from "./elementUtil";

const commentHeaderAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentHeader",
  },
};

const imgAttr = {
  elementType: "img",
  elementAttribute: {
    class: "profileImg",
  },
};

const profileNameAttr = {
  elementType: "p",
  elementAttribute: {
    class: "profileName",
  },
};

const ownCommentMarkAttr = {
  elementType: "p",
  elementAttribute: {
    class: "ownCommentMark",
  },
  textContent: "You",
};

const commentHeader = (data) => {
  const renderProfileImg = () => {
    const img = elementUtil.createDom(imgAttr);
    img.src = data.user.image.png;
    return img;
  };

  const renderProfileName = () => {
    const profileName = elementUtil.createDom(profileNameAttr);
    profileName.textContent = data.user.username;
    return profileName;
  };

  const renderOwnCommentMark = () => {
    const currentUser = JSON.parse(JSON.stringify(initialData.currentUser));
    if (currentUser.username === data.user.username) {
      const ownCommentMark = elementUtil.createDom(ownCommentMarkAttr);
      return ownCommentMark;
    }
    return document.createElement("span");
  };

  const renderCommentHeader = () => {
    const commentHeader = elementUtil.createDom(commentHeaderAttr);
    commentHeader.appendChild(renderProfileImg());
    commentHeader.appendChild(renderProfileName());
    commentHeader.appendChild(renderOwnCommentMark());
    return commentHeader;
  };

  return renderCommentHeader();
};

export default commentHeader;
