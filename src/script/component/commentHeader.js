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

  const renderCommentHeader = () => {
    const commentHeader = elementUtil.createDom(commentHeaderAttr);
    commentHeader.appendChild(renderProfileImg());
    commentHeader.appendChild(renderProfileName());
    return commentHeader;
  };

  return renderCommentHeader();
};

export default commentHeader;
