import { elementUtil } from "./elementUtil";

const commentBodyAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentBody",
  },
};

const commentContentContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentContentContainer",
  },
};

const commentContentParaAttr = {
  elementType: "p",
  elementAttribute: {
    class: "commentContentPara",
  },
};

const repliesTextAttr = {
  elementType: "span",
  elementAttribute: {
    class: "repliesText",
  },
};

const commentContentTextAttr = {
  elementType: "span",
  elementAttribute: {
    class: "commentContentText",
  },
};

const commentBody = (data) => {
  const renderCommentBody = () => {
    const commentBodyWithId = elementUtil.setUniqueId(commentBodyAttr, data);
    const commentBody = elementUtil.createDom(commentBodyWithId);
    commentBody.appendChild(renderCommentContent());
    return commentBody;
  };

  const renderCommentContent = () => {
    const commentContentContainer = elementUtil.createDom(
      commentContentContainerAttr,
    );
    const commentContent = elementUtil.createDom(commentContentParaAttr);
    const repliesText = elementUtil.createDom(repliesTextAttr);
    const commentContentText = elementUtil.createDom(commentContentTextAttr);
    repliesText.textContent = `${data.type === "replies" && !data.isDeleted ? `@${data.replyingTo}` : ""}`;
    commentContentText.textContent = data.isDeleted
      ? " Comment deleted by user"
      : ` ${data.content}`;
    commentContent.appendChild(repliesText);
    commentContent.appendChild(commentContentText);
    commentContentContainer.appendChild(commentContent);
    return commentContentContainer;
  };

  return renderCommentBody();
};

export default commentBody;
