import { formatDistanceToNowStrict } from "date-fns";
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

const commentDateAttr = {
  elementType: "p",
  elementAttribute: {
    class: "commentDate",
  },
};

const actionCommentContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "actionCommentContainerAttr",
  },
};

const deleteActionContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "deleteActionContainerAttr",
  },
};

const deleteActionBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "deleteActionBtn",
  },
  textContent: "Delete",
};

const deleteSvgAttr = {
  uri: "http://www.w3.org/2000/svg",
  name: "svg",
  elementAttribute: {
    width: "12",
    height: "14",
  },
  xmlnsAttribute: {
    nameSpace: "http://www.w3.org/2000/xmlns/",
    name: "xmlns:xlink",
    value: "http://www.w3.org/2000/svg",
  },
  path: {
    uri: "http://www.w3.org/2000/svg",
    name: "path",
    elementAttribute: {
      fill: "#ED6368",
      d: "M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z",
    },
  },
};

const commentHeader = (data) => {
  const IfDataIsActiveUser = () => {
    const currentUser = JSON.parse(JSON.stringify(initialData.currentUser));
    if (currentUser.username === data.user.username) {
      return true;
    }
  };

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
    if (IfDataIsActiveUser()) {
      const ownCommentMark = elementUtil.createDom(ownCommentMarkAttr);
      return ownCommentMark;
    }
    return document.createElement("span");
  };

  const renderCommentDate = () => {
    const commentDate = elementUtil.createDom(commentDateAttr);
    const duration = formatDistanceToNowStrict(new Date(data.createdAt));
    commentDate.textContent = `${duration} ago`;
    return commentDate;
  };

  const renderActionComment = () => {
    const actionCommentContainer = elementUtil.createDom(
      actionCommentContainerAttr,
    );
    if (IfDataIsActiveUser()) {
      actionCommentContainer.appendChild(renderDeleteAction());
      return actionCommentContainer;
    } else {
      return actionCommentContainer;
    }
  };

  const renderDeleteAction = () => {
    const deleteActionContainer = elementUtil.createDom(
      deleteActionContainerAttr,
    );
    const deleteSvg = elementUtil.createSvgDom(deleteSvgAttr);
    const deleteActionBtn = elementUtil.createDom(deleteActionBtnAttr);
    deleteActionContainer.appendChild(deleteSvg);
    deleteActionContainer.appendChild(deleteActionBtn);
    return deleteActionContainer;
  };

  const renderCommentHeader = () => {
    const commentHeader = elementUtil.createDom(commentHeaderAttr);
    commentHeader.appendChild(renderProfileImg());
    commentHeader.appendChild(renderProfileName());
    commentHeader.appendChild(renderOwnCommentMark());
    commentHeader.appendChild(renderCommentDate());
    commentHeader.appendChild(renderActionComment());
    return commentHeader;
  };

  return renderCommentHeader();
};

export default commentHeader;
