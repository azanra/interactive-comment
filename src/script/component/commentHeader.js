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
    class: "actionCommentContainer",
  },
};

const deleteActionContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "deleteActionContainer",
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

const editActionContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "editActionContianer",
  },
};

const editSvgAttr = {
  uri: "http://www.w3.org/2000/svg",
  name: "svg",
  elementAttribute: {
    width: "14",
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
      fill: "#5357B6",
      d: "M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z",
    },
  },
};

const editActionBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "editActionBtn",
  },
  textContent: "Edit",
};

const replyActionContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "replyActionContainer",
  },
};

const replySvgAttr = {
  uri: "http://www.w3.org/2000/svg",
  name: "svg",
  elementAttribute: {
    width: "14",
    height: "13",
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
      fill: "#5357B6",
      d: "M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z",
    },
  },
};

const replyActionBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "replyActionBtn",
  },
  textContent: "Reply",
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
      actionCommentContainer.appendChild(renderEditAction());
      return actionCommentContainer;
    } else {
      actionCommentContainer.appendChild(renderReplyAction());
      return actionCommentContainer;
    }
  };

  const renderDeleteAction = () => {
    const deleteActionContainer = elementUtil.createDom(
      deleteActionContainerAttr,
    );
    const deleteSvg = elementUtil.createSvgDom(deleteSvgAttr);
    const deleteActionBtnAttrWithId = elementUtil.setUniqueId(
      deleteActionBtnAttr,
      data.id,
    );
    const deleteActionBtn = elementUtil.createDom(deleteActionBtnAttrWithId);
    deleteActionContainer.appendChild(deleteSvg);
    deleteActionContainer.appendChild(deleteActionBtn);
    return deleteActionContainer;
  };

  const renderEditAction = () => {
    const editActionContainer = elementUtil.createDom(editActionContainerAttr);
    const deleteSvg = elementUtil.createSvgDom(editSvgAttr);
    const editActionBtnAttrWithId = elementUtil.setUniqueId(
      editActionBtnAttr,
      data.id,
    );
    const editActionBtn = elementUtil.createDom(editActionBtnAttrWithId);
    editActionContainer.appendChild(deleteSvg);
    editActionContainer.appendChild(editActionBtn);
    return editActionContainer;
  };

  const renderReplyAction = () => {
    const replyActionContainer = elementUtil.createDom(
      replyActionContainerAttr,
    );
    const replySvg = elementUtil.createSvgDom(replySvgAttr);
    const replyActionBtnAttrWithId = elementUtil.setUniqueId(
      replyActionBtnAttr,
      data.id,
    );
    const replyActionBtn = elementUtil.createDom(replyActionBtnAttrWithId);
    replyActionContainer.appendChild(replySvg);
    replyActionContainer.appendChild(replyActionBtn);
    return replyActionContainer;
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
